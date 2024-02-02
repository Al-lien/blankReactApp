const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.info(
      `Welcome ${process.env.DB_USER_NAME}, you're now connected to your MySQL local dabatase: ${process.env.DB_NAME}`
    );
  }
});

module.exports = db;
