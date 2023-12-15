const express = require("express");

const router = express.Router();

// GET ALL data
router.get("/", (req, res) => {
    res.status(200).json({message : "GET ALL data"})
});

// GET SINGLE data
router.get("/:id", (req, res) => {
    res.status(200).json({message : "GET SINGLE data"})
});

// CREATE data
router.post("/", (req, res) => {
    res.status(200).json({message : "CREATE data"})
});

// UPDATE data
router.patch("/:id", (req, res) => {
    res.status(200).json({message : "UPDATE data"})
});

// DELETE data
router.delete("/:id", (req, res) => {
    res.status(200).json({message : "DELETE data"})
});

module.exports = router;
