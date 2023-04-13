const express = require("express");
const fs = require("fs");
const { timeLogger } = require("./timeLogger");
const { logger } = require("./logger");
const app = express();
//use app.use to invoke middleware function:-access to request and response objects
app.use(logger, timeLogger);

app.get("/", (req, res) => {
  console.log("home page");
  res.send("HomePage");
});

app.get("/about", (req, res) => {
  console.log("about page");
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  console.log("Contact page");
  res.send("Contact Page");
});

app.get("/data", (req, res) => {
  console.log("Data page");
  let data = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(data);
  res.send(parsedData);
});

app.listen(8080, "localhost", () => {
  console.log("listening on 8080");
});
