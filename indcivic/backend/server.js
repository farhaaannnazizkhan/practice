const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const locationRoutes = require("./routes/location");
const { generate: generateLocationData } = require("./generate-json");

// Initialize database fallback state
global.useMongoFallback = false;

// Auto-generate location JSON data files if missing
try {
    generateLocationData();
} catch (err) {
    console.error("Failed to generate location data:", err.message);
}

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB with a short timeout to support instant fallback
mongoose.connect("mongodb://127.0.0.1:27017/indcivic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 2000,
})
    .then(() => console.log("MongoDB connected successfully."))
    .catch(err => {
        console.warn("MongoDB connection failed! Falling back to local JSON file database.");
        global.useMongoFallback = true;
    });

app.use("/api/auth", authRoutes);
app.use("/api/location", locationRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

