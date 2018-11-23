var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var database = require('./database/index.js');

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.post('/', function(req, res){
  let id = req.body.id;
  let name = req.body.name;
  let company = req.body.company;
  let salary = req.body.salary;
  let age = req.body.age;
  let phone = req.body.phone;
  let email = req.body.email;

 if(!name) {
   res.sendStatus(400);
 } else {
   database.insertOne(id, name, company, salary, age, phone, email, (err, results) => {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
});

app.get('/resuelve', function(req, res){
  database.selectAll((err, results) => {
     if(err) {
       console.log('errrrrrrr hitting the database');
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   })
 //res.status(200).json(data);
})
