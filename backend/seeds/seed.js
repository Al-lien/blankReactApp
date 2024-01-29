require("dotenv").config({ path: "../.env" });

const fs = require("node:fs");
const mysql = require("mysql2/promise");

const { HOST, USER_NAME, PASSWORD, DATABASE } = process.env;

const mockSeed = fs.readFileSync("./mockSeed.sql", "utf8");

const pool = mysql.createPool({
  host: HOST,
  user: USER_NAME,
  password: PASSWORD,
  database: DATABASE,
  multipleStatements: true,
});

const seeds = async () => {
  const db = await pool.getConnection();
  try {
    // adding datas into previously created tables
    await db.query(mockSeed);

    console.info(`${DATABASE} updated 🆙`);
  } catch (err) {
    console.error("Error updating the database:", err.message);
  } finally {
    db.release();
  }
};

seeds();
