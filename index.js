const db = require("./db") //import database connection
const connection = require('./db/connection'); //import connection file
require("console.table") //allows clean display of tabular data
const inquirer = require('inquirer'); // require inquirer


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
            updateEmpRole();
            break;
  
        case 'Exit':
            connection.end();
            break;
        }
      });
  };

//add departments
const addDepartment = async () => {

    inquirer.prompt([
        {
            name: 'newDepartment',
            type: 'input',
            message: 'Enter the name of the new department:'
        }
    ])

        .then((answer) => {
            connection.query(
                "INSERT INTO department SET ?",
                {
                    name: answer.newDepartment,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Your new department was created successfully!')
                    startApp();
                }
            )
        })

}


//add role
const addRoles = async () => {

    inquirer.prompt([
        {
            name: 'newRoleTitle',
            type: 'input',
            message: 'Enter the title of the new role:',
        },
        {
            name: 'newRoleSalary',
            type: 'number',
            message: 'Enter the salary of the new role:',
        },
        {
            name: 'newRoleDepartment',
            type: 'number',
            message: 'Enter the department number of the new role:',
        },
    ])

        .then((answer) => {
            connection.query(
                "INSERT INTO role SET ?",
                {
                    title: answer.newRoleTitle,
                    salary: answer.newRoleSalary,
                    department_id: answer.newRoleDepartment
                },
                (err) => {
                    if (err) throw err;
                    console.log('Your new role was created successfully!')
                    startApp();
                }
            )
        })

}

//add employees
const addEmployees = async () => {

    inquirer.prompt([
        {
            name: 'empFirstName',
            type: 'input',
            message: 'First name:',
        },
        {
            name: 'empLastName',
            type: 'input',
            message: 'Last name:',
        },
        {
            name: 'empRoleID',
            type: 'number',
            message: 'Role ID:',
        },
        {
            name: 'empManID',
            type: 'number',
            message: 'Manager ID:',
        },
    ])

        .then((answer) => {
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.empFirstName,
                    last_name: answer.empLastName,
                    role_id: answer.empRoleID,
                    manager_id: answer.empManID,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Your new employee was created successfully!')
                    startApp();
                }
            )
        })

}


//view departments
async function viewDepartment() {
    let allDepartment = await db.selectAllDepartment()
    console.table(allDepartment)
    startApp();
}


//view roles
async function viewRoles() {
    let allRoles = await db.selectAllRoles()
    console.table(allRoles)
    startApp();
}



//upon npm start, view all employees
async function viewEmployees() {
    let allEmployees = await db.selectAllEmployees()
    console.table(allEmployees)
    startApp();
}


//update employee roles
const updateEmpRole = async () => {

    inquirer.prompt([
        {
            name: 'chooseEmp',
            type: 'rawlist',
            choices: allEmployees,
            message: 'Choose which employee you would like to edit:',
        },
        {
            name: 'updatedRole',
            type: 'number',
            message: 'Enter their updated role ID:',
        }
    ])

        .then((answer) => {
            connection.query(
                'UPDATE employee SET ? WHERE ?',
                {
                    role_id: answer.updatedRole,
                },
                (err) => {
                    if (err) throw err;
                    console.log('Employee role successfully updated!')
                    startApp();
                }
            )
        })

}



//start app
startApp();
