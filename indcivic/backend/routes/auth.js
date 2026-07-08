const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Sign Up
router.post("/signup", async (req, res) => {
    const { name, email, password, role, residence } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role: role || "citizen",
            residence
        });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id, role: user.role }, "secretkey", { expiresIn: "1h" });
        res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Protected Dashboard
router.get("/dashboard", authMiddleware, (req, res) => {
    if (req.user.role === "admin") {
        res.json({ message: `Welcome Admin ${req.user.id}, manage civic data here.` });
    } else {
        res.json({ message: `Welcome Citizen ${req.user.id}, explore civic resources.` });
    }
});

module.exports = router;
