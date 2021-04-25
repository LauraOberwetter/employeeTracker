const mysql = require("mysql");
const util = require("util");

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
