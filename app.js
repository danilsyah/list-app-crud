// import package framework express
const express = require("express");
// import package database mysql
const mysql = require("mysql");
const app = express();
// route asset folder public
app.use(express.static("public"));

// config request form value
app.use(
  express.urlencoded({
    extended: false,
  })
);

// create object connection database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "list_app",
});

// check condition database
connection.connect(function (err) {
  if (err) {
    console.error("error connection database : " + err.stack);
    return;
  }
  console.log("connection database success");
});

app.get("/", (req, res) => {
  res.render("top.ejs");
});

app.get("/index", (req, res) => {
  connection.query("SELECT * FROM schedules", (error, results) => {
    console.log(results);
    res.render("index.ejs", {
      schedules: results,
    });
  });
});

// route page add
app.get("/add", (req, res) => {
  res.render("add.ejs");
});

// route insert data
app.post("/create", (req, res) => {
  connection.query(
    "INSERT INTO schedules(description) VALUES (?)",
    [req.body.itemDesc],
    (error, results) => {
      res.redirect("/index");
    }
  );
});

// route delete data
app.post("/delete/:id", (req, res) => {
  connection.query(
    "DELETE FROM schedules WHERE id = ? ",
    [req.params.id],
    (error, results) => {
      console.log(`Data with id = ${req.params.id} successs save`);
      res.redirect("/index");
    }
  );
});

app.get("/edit/:id", (req, res) => {
  connection.query(
    "SELECT * FROM schedules WHERE id = ?",
    [req.params.id],
    (error, results) => {
      res.render("edit.ejs", { item: results[0] });
    }
  );
});

// route process update
app.post("/update/:id", (req, res) => {
  connection.query(
    "UPDATE schedules SET description = ? WHERE id = ?",
    [req.body.itemDesc, req.params.id],
    (error, results) => {
      res.redirect("/index");
    }
  );
});

// port run server
app.listen(3000);
