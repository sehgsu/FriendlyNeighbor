// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var Sequelize = require("sequelize");
var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();
console.log("connected to jawsdb");
connection.end();

// Set up our connection information
var sequelize = new Sequelize(
  "l0juj0r40cp51b3r", 
  "cf1v9fjrxlwexnou", 
  "xidzmhmuqk2wekp3"
{ host: "o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  dialect: "mysql",
});


// Export connection
module.exports = sequelize;