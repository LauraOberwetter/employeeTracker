//import mysql
const mysql = require("mysql");
//allows use of promisify from library
const util = require("util");

//create connection with mysql
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mySQLpWord:)",
    database: "employees"
})

//establish a connection
connection.connect();

//promisifying queries allows us to use async/await syntax
connection.query = util.promisify(connection.query)

//export connection
module.exports = connection;
