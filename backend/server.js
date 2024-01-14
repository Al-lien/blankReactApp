require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
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
  console.info(req.path, req.method);
  next();
});

// 👇 routes
app.use("/api/basicRoutes", basicRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // 👇 listen for request
    app.listen(process.env.PORT, () => {
      console.info("Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.info(error);
  });
