const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");

const userJsonPath = path.join(__dirname, "../users.json");

// Define Mongoose Schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ["admin", "citizen"], default: "citizen" },
    residence: {
        state: String,
        district: String,
        city: String,
        ward: String
    }
});

const MongoUser = mongoose.model("User", UserSchema);

// JSON file database implementation
const jsonDb = {
    getUsers() {
        if (!fs.existsSync(userJsonPath)) {
            fs.writeFileSync(userJsonPath, JSON.stringify([]));
        }
        try {
            return JSON.parse(fs.readFileSync(userJsonPath, "utf8"));
        } catch (e) {
            return [];
        }
    },
    saveUsers(users) {
        fs.writeFileSync(userJsonPath, JSON.stringify(users, null, 2));
    }
};

class UserFallback {
    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.password = data.password;
        this.role = data.role || "citizen";
        this.residence = data.residence;
        this._id = data._id || data.id || Math.random().toString(36).substring(2, 15);
    }

    async save() {
        const users = jsonDb.getUsers();
        const existingIdx = users.findIndex(u => u.email === this.email);
        if (existingIdx >= 0) {
            users[existingIdx] = this.toJSON();
        } else {
            users.push(this.toJSON());
        }
        jsonDb.saveUsers(users);
        return this;
    }

    toJSON() {
        return {
            _id: this._id,
            name: this.name,
            email: this.email,
            password: this.password,
            role: this.role,
            residence: this.residence
        };
    }
}

UserFallback.findOne = async function(query) {
    const users = jsonDb.getUsers();
    if (query.email) {
        const u = users.find(user => user.email === query.email);
        return u ? new UserFallback(u) : null;
    }
    return null;
};

UserFallback.findById = async function(id) {
    const users = jsonDb.getUsers();
    const u = users.find(user => user._id === id || user.id === id);
    return u ? new UserFallback(u) : null;
};

// Expose a class wrapper that routes calls depending on fallback status
class User {
    constructor(data) {
        if (global.useMongoFallback) {
            return new UserFallback(data);
        }
        try {
            const mongoDoc = new MongoUser(data);
            
            // Wrap the save method of the mongo document
            const originalSave = mongoDoc.save;
            mongoDoc.save = async function(...args) {
                try {
                    return await originalSave.apply(this, args);
                } catch (e) {
                    console.warn("MongoDB save failed, falling back to local JSON database:", e.message);
                    global.useMongoFallback = true;
                    // Convert mongo document data to fallback
                    const fallbackDoc = new UserFallback(data);
                    return await fallbackDoc.save();
                }
            };
            
            return mongoDoc;
        } catch (e) {
            console.warn("Mongoose instantiation failed, falling back to local JSON db:", e.message);
            global.useMongoFallback = true;
            return new UserFallback(data);
        }
    }
}

// Attach static methods to the wrapper class
User.findOne = async function(query) {
    if (global.useMongoFallback) {
        return UserFallback.findOne(query);
    }
    try {
        return await MongoUser.findOne(query);
    } catch (e) {
        console.warn("MongoDB findOne failed, falling back to local JSON database:", e.message);
        global.useMongoFallback = true;
        return UserFallback.findOne(query);
    }
};

User.findById = async function(id) {
    if (global.useMongoFallback) {
        return UserFallback.findById(id);
    }
    try {
        return await MongoUser.findById(id);
    } catch (e) {
        console.warn("MongoDB findById failed, falling back to local JSON database:", e.message);
        global.useMongoFallback = true;
        return UserFallback.findById(id);
    }
};

module.exports = User;
