const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/taskRoutes");
require("dotenv").config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use(router);

const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("MongoDB Connected...");
    app.listen(port, () => console.log(`Server started on port ${port}`));
  })
  .catch((err) => console.log(err));

module.exports = app;
