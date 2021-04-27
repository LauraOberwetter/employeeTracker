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
    selectAllRoles() {
        return this.connection.query(
            "SELECT * from role"
        )   

    }
    selectAllDepartment() {
        return this.connection.query(
            "SELECT * from department"
        )   

    }

}

module.exports = new DB(connection);