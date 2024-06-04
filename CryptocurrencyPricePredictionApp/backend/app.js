const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');
const modelRoutes = require('./routes/modelRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/api/data', dataRoutes);
app.use('/api/model', modelRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error(err);
});

module.exports = app;