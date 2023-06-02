const mongoose = require("mongoose");
const config = require("../config/db");

const BookShema = mongoose.Schema({
    name:{
        type: String
    },
    src:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true,
    },
    year:{
        type: Number
    },
    desc:{
        type: String,
        required: true
    },
    cost:{
        type: Number
    }
});

const Book = module.exports = mongoose.model('Book', BookShema)