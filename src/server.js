require("dotenv").config();
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🍏 منصة Tfa7a تعمل بنجاح");
});

app.listen(process.env.PORT, () => {
  console.log("🚀 Tfa7a تعمل على المنفذ " + process.env.PORT);
});
