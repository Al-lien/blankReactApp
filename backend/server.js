require("dotenv").config();

const express = require("express");
const cors = require("cors");

// 👇 import basic routes patern
const basicRoutes = require("./routes/basicRoutes");

// 👇 express app
const app = express();

// 👇 middleware
app.use(
  cors({
    origin: "*",
  })
);
/* parses the JSON data and makes it available in req.body */
app.use(express.json());
/* console.log path and request type  */
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
