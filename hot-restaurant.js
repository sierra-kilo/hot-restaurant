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


app.get('/', function (req, res) {
  res.send('Hot Restuarant')
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})


