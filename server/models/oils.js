const mongoose = require('mongoose')

const SoundSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    disclaimer: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    black_instock: {
        type: Number,
        required: true
    },
    white_instock: {
        type: Number,
        required: true
    },
    silver_instock: {
        type: Number,
        required: true
    },
    gold_instock: {
        type: Number,
        required: true
    },

})

module.exports = mongoose.model("Song", SoundSchema)