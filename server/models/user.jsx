const mongoose = require('mongoose');
// const multer = require('multer')

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: false
    },
    // email: {
    //     type: String,
    //     required: true
    // },
    password: {
        type: String,
        required: false
    }
    // image: {
    //     type: String,
    // }
});

module.exports = mongoose.model("User", UserSchema);

