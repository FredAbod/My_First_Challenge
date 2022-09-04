const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_MAIL,
    pass: process.env.PASSWORD,
  },
});

const mailOptions = {
  from: "boluwatifefred@gmail.com",
  to: "fredrickbolutife@gmail.com",
  subject: "You are under pressure",
  text: "DB has stopped working ooooo guy!!!",
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to db");
  } catch (error) {
    let count = 0;
    setTimeout(connectDB, 3000);
    console.log("MongoDB connection unsuccessful, retry after 3 seconds");
    ++count;
    if (count == 5) {
      // await transporter.sendMail(mailOptions);
      transporter.sendMail(mailOptions, (error, info) => {
        res.status(200).json({ message: "email Page" });
        console.log(
          "mongodb not connecting and Email Sent to " + info.accepted
        );
      });
    }
  }
};

module.exports = connectDB;
// process.abort();
