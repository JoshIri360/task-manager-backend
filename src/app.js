const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const setTaskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());

// Routes
setTaskRoutes(app);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;