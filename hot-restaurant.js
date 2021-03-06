//const mysql = require('mysql');


// const connection = mysql.createConnection({
//   host: "localhost",
//   port: 3000,
//   user: "root",
//   password: "",
//   database: "hotRestaurant"
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   start();
// });


const express = require('express');
const app = express();

var tableList = [];
var waitList = [];


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/home.html');
})

app.get('/tables', function (req, res) {
  res.json(tableList);
})

app.get('/reserve', function (req, res) {
  res.sendFile(__dirname + '/html/reserve.html');
})

app.get('/api/waitList', function (req, res) {
  res.send(waitList);
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
