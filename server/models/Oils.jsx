const mongoose = require('mongoose');

const oilSchema = mongoose.Schema({
    productName: { type: String,required: true},
    productPrice: { type: Number,required: true},
    description: { type: String,required: true},
    disclaimer: { type: String,required: true},
    size: { type: String,required: true},
    quantity: { type: Number,required: true},
    inStock: { 
        Black: { type: Number,required: true},
        White: { type: Number,required: true},
        Silver: { type: Number,required: true},
        Gold: { type: Number,required: true},
    },
    date: { type: Date, default: Date.now}
});

module.exports = mongoose.model('oils', oilSchema);

