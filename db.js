// backend/db.js
const mysql = require('mysql2');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Priti@3204',
  database: 'fun_learning',
  port: 3306
});

module.exports = pool.promise();