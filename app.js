// import package framework express
const express = require('express');
// import package database mysql
const mysql = require("mysql");
const app = express();
// route asset folder public
app.use(express.static("public"));

// config request form value
app.use(express.urlencoded({
  extended: false,
}));

// create object connection database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "list_app"
});

// check condition database
connection.connect(function (err) {
  if (err) {
    console.error("error connection database : " + err.stack);
    return;
  }
  console.log("connection database success");
});

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get("/index", (req, res) => {
  connection.query("SELECT * FROM schedules", (error, results) => {
    console.log(results);
    res.render("index.ejs", {
      schedules: results
    });
  });
});

app.get("/add", (req, res) => {
  res.render("add.ejs");
});

app.post("/create", (req, res) => {
  connection.query(
    "INSERT INTO schedules(description) VALUES (?)",
    [req.body.itemDesc],
    (error, results) => {
      res.redirect("/index");
    }
  );
});

app.listen(3000);