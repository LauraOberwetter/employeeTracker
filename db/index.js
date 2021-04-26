//import connection file
const connection = require('./connection')

//create DB class
class DB {
    constructor(connection){
        this.connection = connection
    }
    
    selectAllEmployees() {
        return this.connection.query(
            "SELECT * from employee"
        )   

    }

}

module.exports = new DB(connection);