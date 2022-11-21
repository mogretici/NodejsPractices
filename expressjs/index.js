const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("INDEX PAGE");
});
app.get("/about", (req, res) => {
  res.status(200).send("ABOUT PAGE");
});
app.get("/contact", (req, res) => {
  res.status(200).send("CONTACT PAGE");
});
app.get("*", (req, res) => {
  res.status(404).send("404!");
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
