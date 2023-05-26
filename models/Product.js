const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title field is required!!!"],
        unique: true,
        minlength: [5, "Min length should be 10 Characters."],
        maxlength: [140, "Max length should be 140 Characters."],
    },
    price: {
        type: Number,
        required: true,
        min: 0,

    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
})

const ProductModel = mongoose.model('product', productSchema)

module.exports = ProductModel;