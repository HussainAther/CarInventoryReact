// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
const dbURI = 'mongodb://localhost:27017/car_inventory'; // Update with your MongoDB connection string
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

