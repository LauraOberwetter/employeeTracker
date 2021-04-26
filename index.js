const db = require("./db") //import database connection
require("console.table") //allows clean display of tabular data
const inquirer = require('inquirer'); // require inquirer

/////////////////////////start inquirer
connection.connect((err) => {
    if (err) throw err;
    startApp();
  });

const startApp = () => {
    inquirer
      .prompt({
        name: 'start',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
          'Add department',
          'Add role',
          'Add employee',
          'View department',
          'View role',
          'View employee',
          'Update employee role',
          'exit',
        ],
      })
      .then((answer) => {
        switch (answer.start) {
          case 'Add department':
            addDepartment();
            break;
  
          case 'Add role':
            addRoles();
            break;
  
          case 'Add employee':
            addEmployees();
            break;
  
          case 'View department':
            viewDepartment();
            break;

        case 'View role':
            viewRoles();
            break;
        
        case 'View employee':
            viewEmployees();
            break;
        
        case 'Update employee role':
            updateEmployees();
            break;
  
        case 'Exit':
            connection.end();
            break;
  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };
  ////////////////

//add departments // these functions need to change so we are seeing the database with the new addition
async function addDepartment() {
    let newDepartment = await db.insertIntoDepartments()
    console.table(newDepartment)
}

//add roles
async function addRoles() {
    let newRole = await db.insertIntoRoles()
    console.table(newRole)
}

//add employees
async function addEmployees() {
    let newEmployee = await db.insertIntoEmployees()
    console.table(newEmployee)
}


//view departments
async function viewDepartment() {
    let allDepartment = await db.selectAllDepartment()
    console.table(allDepartment)
}


//view roles
async function viewRoles() {
    let allRoles = await db.selectAllRoles()
    console.table(allRoles)
}



//upon npm start, view all employees
async function viewEmployees() {
    let allEmployees = await db.selectAllEmployees()
    console.table(allEmployees)
}


//update employee roles

async function updateEmployees() {
    let updateEmployees = await db.selectAllEmployees()
    console.table(allEmployees)
}

//insert inquirer to build the interface
