const express = require("express");
const fs = require("fs");
const app = express();
//use app.use to invoke middleware function:-access to request and response objects
app.use((req, res, next) => {
  //logic of middleware
  //went to middleware first before going to route as show in console.logs:-inbetween
  console.log("hello from middleware");
  //middleware to find the performance of route : i.e time takes by the route to be executed
  //before the all the routes MW will be executed
  const startTime = performance.now();
  next(); //go to route
  //once the route is executed , come here
  const endTime = performance.now();
  console.log(`${endTime - startTime} ms`);
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
  let data = fs.readFileSync("./db.json", "utf-8");
  let parsedData = JSON.parse(data);
  res.send(parsedData);
});

app.listen(8080, "localhost", () => {
  console.log("listening on 8080");
});
