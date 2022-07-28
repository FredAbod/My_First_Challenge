const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        uppercase: true,
        trim: true,
        minLength: 8,
        maxLength: 20,
    },
    email: {

        type: String,
        required: true,
         },
     phoneNo: {
        type: Number,
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