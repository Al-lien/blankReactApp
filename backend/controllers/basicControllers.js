const db = require("../db/db");
const testTable = process.env.TEST_TABLE;

// GET ALL data
const getAllData = async (req, res) => {
  const sql = `SELECT * FROM ${testTable}`;

  try {
    const [results] = await db.promise().query(sql);
    res.json(results);
  } catch (error) {
    console.error("MySQL query error:", error);
    res.status(500).send("Internal Server Error");
  }
};

// GET SINGLE data
const getSingleData = async (req, res) => {
  const id = parseInt(req.params.id);
  const sql = `SELECT * FROM ${testTable} WHERE id = ?`;

  try {
    const [results] = await db.promise().query(sql, [id]);
    res.json(results);
  } catch (error) {
    console.error("MySQL query error:", error);
    res.status(500).send("Internal Server Error");
  }
};

// CREATE data
const createData = async (req, res) => {
  // const { values, ..., ... } = req.body;
  // const sql = `INSERT INTO ${testTable}(values, ..., ...) VALUES (?, ?, ?)`;
  /* try {
    const [result] = await db.promise().query(sql, [values, ..., ...]);
    res.status(201).send({ id: result.insertId, message: "Data created" });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  } */
  res.status(200).json({ message: "Data created" });
};

// UPDATE data
const updateData = async (req, res) => {
  const id = parseInt(req.params.id);
  // const { values, ..., ... } = req.body;
  // const sql = `UPDATE ${testTable} SET values = ?, ... = ?, ... = ? WHERE id = ?`;

  /* try {
    const [result] = await db.promise().query(sql, [values, ..., ..., id]);
    if (result.affectedRows > 0) {
      res.status(200).send({ message: "Data updated" });
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  } */

  res.status(200).json({ message: "Data updated" });
};

// DELETE data
const deleteData = async (req, res) => {
  const id = parseInt(req.params.id);
  const sql = `DELETE FROM ${testTable} WHERE id = ?`;

  try {
    const [results] = await db.promise().query(sql, [id]);

    if (results.affectedRows > 0) {
      res.status(204).send({ message: "Data deleted" });
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.error("MySQL query error:", error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getAllData,
  getSingleData,
  createData,
  updateData,
  deleteData,
};
