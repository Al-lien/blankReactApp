require("dotenv").config({ path: "../.env" });

const fs = require("node:fs");
const mysql = require("mysql2/promise");

const { DB_HOST, DB_USER_NAME, DB_PASSWORD, DB_NAME } = process.env;

const schema = fs.readFileSync("./schema.sql", "utf8");

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER_NAME,
  password: DB_PASSWORD,
  multipleStatements: true,
});

const migrate = async () => {
  const db = await pool.getConnection();
  try {
    // handle creation of database
    await db.query(`DROP DATABASE IF EXISTS ${DB_NAME}`);
    await db.query(`CREATE DATABASE ${DB_NAME}`);
    await db.query(`USE ${DB_NAME}`);

    // adding tables into the database
    await db.query(schema);

    console.info(`${DB_NAME} created 🆙`);
  } catch (err) {
    console.error("Error updating the database:", err.message);
  } finally {
    db.release();
  }
};

migrate();
