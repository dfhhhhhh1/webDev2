
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemsRouter = require('./routes/items');  // Adjust the path as needed

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/items', itemsRouter);

// Connect to MongoDB using Mongoose
const uri = process.env.MONGO_URI;
mongoose.connect(uri)
    .then(() => console.log('Connected successfully to MongoDB with Mongoose'))
    .catch(err => console.error('Failed to connect to MongoDB', err));



const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
