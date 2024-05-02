// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');

// require('dotenv').config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

//mongodb+srv://khaled1234:<khaled1234>@webdev2final.xzkqhfa.mongodb.net/?retryWrites=true&w=majority&appName=WebDev2Final
// ^^^^ string maybe



// require('dotenv').config();
// console.log("MongoDB URI: ", process.env.MONGO_URI);
// const { MongoClient } = require('mongodb');

// // Connection URL and settings
// const url = process.env.MONGO_URI; // Ensure you have this in your .env file
// //const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
// const client = new MongoClient(uri);

// async function connectDB() {
//   try {
//     // Connect the client to the server
//     await client.connect();
//     console.log("Connected successfully to MongoDB");

//     // Further operations like database selection and queries can go here
//   } catch (err) {
//     console.error(err);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }

// connectDB();

require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const itemsRouter = require('./routes/items');  // Ensure the path is correct

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/items', itemsRouter);

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");
    // Additional operations like database interactions can go here
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

connectDB();

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
