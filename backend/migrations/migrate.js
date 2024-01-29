require("dotenv").config({ path: "../.env" });

const fs = require("node:fs");
const mysql = require("mysql2/promise");

const { HOST, USER_NAME, PASSWORD, DATABASE } = process.env;

const schema = fs.readFileSync("./schema.sql", "utf8");

const pool = mysql.createPool({
  host: HOST,
  user: USER_NAME,
  password: PASSWORD,
  multipleStatements: true,
});

const migrate = async () => {
  const db = await pool.getConnection();
  try {
    // handle creation of database
    await db.query(`DROP DATABASE IF EXISTS ${DATABASE}`);
    await db.query(`CREATE DATABASE ${DATABASE}`);
    await db.query(`USE ${DATABASE}`);

    // adding tables into the database
    await db.query(schema);

    console.info(`${DATABASE} created 🆙`);
  } catch (err) {
    console.error("Error updating the database:", err.message);
  } finally {
    db.release();
  }
};

migrate();
