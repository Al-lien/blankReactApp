const db = require("../db/db");
const testTable = process.env.TEST_TABLE;

// GET ALL data
const getAllData = async (req, res) => {
  const sql = `SELECT * FROM ${testTable}`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("MySQL query error:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(results);
    }
  });
};

// GET SINGLE data
const getSingleData = async (req, res) => {
  res.status(200).json({ message: "GET SINGLE data" });
};

// CREATE data
const createData = async (req, res) => {
  res.status(200).json({ message: "CREATE data" });
};

// UPDATE data
const updateData = async (req, res) => {
  res.status(200).json({ message: "UPDATE data" });
};

// DELETE data
const deleteData = async (req, res) => {
  res.status(200).json({ message: "DELETE data" });
};

module.exports = { getAllData, getSingleData, createData, updateData, deleteData };
