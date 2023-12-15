require("dotenv").config();

const express = require("express");

// 👇 import basic routes patern
const basicRoutes = require("./routes/basicRoutes");

// 👇 express app
const app = express();

// 👇 middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// 👇 routes
app.use("/api/basicRoutes", basicRoutes);

// 👇 listen for request
app.listen(process.env.PORT, () => {
  console.log("Listening on port", process.env.PORT);
});
