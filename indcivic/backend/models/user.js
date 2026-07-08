const mongoose = require("mongoose");

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

module.exports = mongoose.model("User", UserSchema);
