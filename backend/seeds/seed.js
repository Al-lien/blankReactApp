require("dotenv").config({ path: "../.env" });

const fs = require("node:fs");
const mysql = require("mysql2/promise");

const { DB_HOST, DB_USER_NAME, DB_PASSWORD, DB_NAME } = process.env;

const mockSeed = fs.readFileSync("./mockSeed.sql", "utf8");

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER_NAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  multipleStatements: true,
});

const seeds = async () => {
  const db = await pool.getConnection();
  try {
    // adding datas into previously created tables
    await db.query(mockSeed);

    console.info(`${DB_NAME} updated 🆙`);
  } catch (err) {
    console.error("Error updating the database:", err.message);
  } finally {
    db.release();
  }
};

seeds();
