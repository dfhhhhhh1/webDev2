// const mongoose = require('mongoose');

// const itemSchema = new mongoose.Schema({
//     id: String,
//     name: String,
//     quantity: Number,
//     description: String,
//     cost: String,
//     SalePrice: String,

// });

// const Item = mongoose.model('Item', itemSchema);

// module.exports = Item;
// export default Item;


const mongoose = require('mongoose');

// Define the schema for your item
const itemSchema = new mongoose.Schema({
    id: String,
    name: String,
    quantity: Number,
    description: String,
    cost: String,
    SalePrice: String,
});

// Define the model for your item using the schema
const Item = mongoose.model('Item', itemSchema);

// Export the model
module.exports = Item;


