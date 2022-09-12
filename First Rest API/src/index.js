const express = require("express");
const pointsRouter = require("./routes/puan");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

//middleware
app.use("/puan", pointsRouter);
app.get("/", (req, res) => {
  res.send("hello world");
});
const port = process.env.PORT || 5000;

//mongodb bağlantısı
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to mongodb"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log("5000 portu dinleniyor");
});
