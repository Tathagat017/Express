const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());
app.get("/students", function (req, res) {
  let data = fs.readFileSync("./db.json", "utf-8");
  data = JSON.parse(data);
  console.log(data.students);
  res.send(data.students);
});

app.post("/addstudent", (req, res) => {
  console.log(req.body);
  let data = fs.readFileSync("./db.json", "utf-8");
  data = JSON.parse(data);

  let studentDataReceived = req.body;
  data.students.push(studentDataReceived);

  fs.writeFile("./db.json", JSON.stringify(data), (err) => {
    if (err) {
      res.send(err);
    }
    res.send("data is added");
  });
});

app.update("/updatestudent/:id", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

  const { id } = req.params;
  const { name, city } = req.body;
  data = data.map((el) => {
    if (el.id === id) {
      return (el.name = name);
    } else {
      return el;
    }
  });
  fs.writeFile("./db.json", JSON.stringify(data), (err) => {
    if (err) {
      res.send(err);
    }
    res.send("data is updated");
  });
});

app.delete("/deletestudent", (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf8"));
  let new_students_data = data.students.filter((el) => {
    if (el.name == "Anandi") {
      return false;
    }
  });
  console.log(new_students_data);
  //   fs.writeFileSync("./db.json", JSON.stringify(new_students_data));
  res.send("deleted");
});

app.listen(8080, "localhost", () => {
  console.log("starting server");
});
