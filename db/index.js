//import connection file
const connection = require('./connection')

//create DB class
class DB {
    constructor(connection){
        this.connection = connection
    }
    // insertIntoDepartments() {
    //     return this.connection.query(
    //         "INSERT INTO departments (name) VALUES ()"
    //     )   

    // }
    insertIntoRoles() {
        return this.connection.query(
            "INSERT INTO roles (title, salary, department_id) VALUES ()"
        )   

    }
    insertIntoEmployees() {
        return this.connection.query(
            "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ()"
        )   

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