const express = require("express");
const app = express();
//use app.use to invoke middleware function:-access to request and response objects
app.use((req, res, next) => {
  console.log(1);
  console.log("hello from middleware");
  next();
  console.log(2);
});

app.use((req, res, next) => {
  console.log(7);
  console.log("hello from middleware");
  next();
  console.log(8);
});

//!if you visist /about :- 1 7 4 8 2
//!if you visist /:- 1 7 3 8 2

app.get("/", (req, res) => {
  console.log(3);
  res.send("HomePage");
});

app.get("/about", (req, res) => {
  console.log(4);
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  console.log(5);
  res.send("Contact Page");
});

app.get("/data", (req, res) => {
  console.log(6);
  res.send("data Page");
});

app.listen(8000, "localhost", () => {
  console.log("listening on 8080");
});
