require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./database/db");
const userRouter = require("./routes/user.routes");
const logger = require("morgan");
const http = require("http");
const https = require("https");
const path = require("path");
const app = express();
const fs = require("fs");

connectDB();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const options = {
  key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'localhost.pem')),
};
const port = process.env.PORT || 2300;
const port2 = process.env.HTTPS_PORT || 300;

app.get("/", (req, res) => res.send("Home Page"));

app.use("/api", userRouter);
app.all("*", (req, res) => {
  return res.status(404).json({ message: "Oops page not found" });
});

app.listen(port, () => {
  console.log(`Server up and running on port http://localhost:${port}`);
});
https.createServer(options, app).listen(port2, () => {
  console.log(`HTTP/2 listening on port https://localhost:${port2}`);
});