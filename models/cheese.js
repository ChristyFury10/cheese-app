const { mongo } = require("mongoose");
const mongoose = require("./connection.js");

///////////////////////////////
// MODELS
////////////////////////////////
const CheeseSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String
});

const Cheese = mongoose.model("Cheese", CheeseSchema);
// collection of people will be called peoples in MongoDB

module.exports = Cheese;