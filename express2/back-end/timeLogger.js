const fs = require("fs");
const timeLogger = (req, res, next) => {
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
  let perfor = `${endTime - startTime} ms\n`;
  fs.appendFile("./logs.txt", perfor, (err) => {
    if (err) throw err;
    console.log("perfomance written to log");
  });
};
module.exports = { timeLogger: timeLogger };
