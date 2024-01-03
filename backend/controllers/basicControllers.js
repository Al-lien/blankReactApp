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
  const id = parseInt(req.params.id);
  const sql = `SELECT * FROM ${testTable} where id = ${id}`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("MySQL query error:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(results);
    }
  });
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
  const id = parseInt(req.params.id);
  const sql = `DELETE FROM ${testTable} where id = ${id}`;

  db.query(sql, (err, results) => {
    if (err) {
      console.error("MySQL query error:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  getAllData,
  getSingleData,
  createData,
  updateData,
  deleteData,
};
