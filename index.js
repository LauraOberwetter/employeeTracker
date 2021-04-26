//import database connection
const db = require("./db")
//allows clean display of tabular data
require("console.table")

console.log("app is running")


//upon npm start, returns table of all employees
async function viewEmployees() {
    let allEmployees = await db.selectAllEmployees()
    console.table(allEmployees)
}

viewEmployees();