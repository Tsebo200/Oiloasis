const mongoose = require('mongoose');

const oilSchema = mongoose.Schema({
    productName: { type: String,required: false},
    productPrice: { type: Number,required: false},
    description: { type: String,required: false},
    disclaimer: { type: String,required: false},
    size: { type: String,required: false},
    quantity: { type: Number,required: false},
    color: {type: String, required: false},
    date: { type: Date, default: Date.now}
});

module.exports = mongoose.model('oils', oilSchema);

