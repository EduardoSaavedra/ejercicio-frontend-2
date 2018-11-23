var mysql = require('mysql');


var con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "resuelve",
 database: "employees"
});

var insertOne = function(id, name, company, salary, age, phone, email, cb) {
 con.query('INSERT INTO workers (id, name, company, salary, age, phone, email) VALUES (?, ?, ?, ?, ?, ?, ?)',
   [id, name, company, salary, age, phone, email, (err, results, fields) => {
     if(err) {
       cb(err, null);
     } else {
       console.log(results);
       cb(null, results);
     }
   });
};

var selectAll = function(cb) {
 con.query('SELECT * FROM workers', (err, results, fields)=> {
   if(err) {
     cb(err, null);
   } else {
     cb(null, results);
   }
 });
};

module.exports.insertOne = insertOne;
module.exports.selectAll = selectAll;
