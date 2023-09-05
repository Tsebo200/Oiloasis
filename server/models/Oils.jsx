const mongoose = require('mongoose');

const oilSchema = mongoose.Schema({
    productName: { type: String,required: true},
    productPrice: { type: Number,required: true},
    description: { type: String,required: true},
    disclaimer: { type: String,required: true},
    size: { type: String,required: true},
    quantity: { type: Number,required: true},
    inStock: { 
        black: { type: Number,required: true},
        white: { type: Number,required: true},
        silver: { type: Number,required: true},
        gold: { type: Number,required: true},
    },
    date: { type: Date, default: Date.now}
});

module.exports = mongoose.model('oils', oilSchema);

