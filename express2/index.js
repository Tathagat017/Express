const express = require("express");
const app = express();
//use app.use to invoke middleware function:-access to request and response objects
app.use((req, res, next) => {
  //logic of middleware
  //went to middleware first before going to route as show in console.logs:-inbetween
  console.log("hello from middleware");
  next();
});
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
  res.send("data Page");
});

app.listen(8080, "localhost", () => {
  console.log("listening on 8080");
});
