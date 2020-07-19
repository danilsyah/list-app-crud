// import package framework express
const express = require('express');
// import package database mysql
const mysql = require("mysql");
const app = express();
// route asset folder public
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.listen(3000);