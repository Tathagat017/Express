const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HomePage");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/data", (req, res) => {
  res.send("data Page");
});

app.listen(8080, "localhost", () => {
  console.log("listening on 8080");
});
