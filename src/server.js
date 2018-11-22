var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', function(req, res){
  let id = req.body.id;
  let name = req.body.name;
  let company = req.body.company;
  let salary = req.body.salary;
  let age = req.body.age;
  let phone = req.body.phone;
  let email = req.body.email;

 if(!id) {
   res.sendStatus(400);
 } else {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
