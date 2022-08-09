const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        trim: true,
        minLength: 8,
        maxLength: 20,
    },
    email: {

        type: String,
        required: true,
        unique: true,
         },
     phoneNo: {
        type: String,
        unique: true,
        minLength: 11,
        maxLength: 11,
     },
     yourReason: {
        type: String,
        required: true,
     },

    },
);

module.exports = mongoose.model('User', userSchema);