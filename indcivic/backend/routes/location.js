const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const dataDir = path.join(__dirname, "../../india_data");

router.get("/states", (req, res) => {
    const states = JSON.parse(fs.readFileSync(path.join(dataDir, "states.json")));
    res.json(states);
});

router.get("/districts/:state", (req, res) => {
    const stateFile = req.params.state.replace(/\s+/g, "") + ".json";
    const filePath = path.join(dataDir, stateFile);

    if (!fs.existsSync(filePath)) return res.status(404).json({ message: "State not found" });

    const stateData = JSON.parse(fs.readFileSync(filePath));
    res.json(Object.keys(stateData));
});

router.get("/cities/:state/:district", (req, res) => {
    const stateFile = req.params.state.replace(/\s+/g, "") + ".json";
    const filePath = path.join(dataDir, stateFile);

    if (!fs.existsSync(filePath)) return res.status(404).json({ message: "State not found" });

    const stateData = JSON.parse(fs.readFileSync(filePath));
    const cities = stateData[req.params.district];

    if (!cities) return res.status(404).json({ message: "District not found" });

    res.json(cities);
});

module.exports = router;
