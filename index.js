//import database connection
const db = require("./db")
//allows clean display of tabular data
require("console.table")

console.log("app is running")

//add departments // these functions need to change so we are seeing the database with the new addition
async function addDepartment() {
    let newDepartment = await db.insertIntoDepartments()
    console.table(newDepartment)
}
addDepartment();

//add roles
async function addRoles() {
    let newRole = await db.insertIntoRoles()
    console.table(newRole)
}
addRoles();

//add employees
async function addEmployees() {
    let newEmployee = await db.insertIntoEmployees()
    console.table(newEmployee)
}
addEmployees();

//view departments
async function viewDepartment() {
    let allDepartment = await db.selectAllDepartment()
    console.table(allDepartment)
}
viewDepartment();

//view roles
async function viewRoles() {
    let allRoles = await db.selectAllRoles()
    console.table(allRoles)
}
viewRoles();


//upon npm start, view all employees
async function viewEmployees() {
    let allEmployees = await db.selectAllEmployees()
    console.table(allEmployees)
}
viewEmployees();

//update employee roles

//insert inquirer to build the interface