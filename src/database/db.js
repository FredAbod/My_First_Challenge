const mongoose = require('mongoose');
 
const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL, () => {
       console.log('Connected to the Mongoose Database');

    });
};

module.exports = connectDB;