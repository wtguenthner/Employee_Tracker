
import db from '../config/connection.js';
import info from '../index.js'
// const info = {roles:[], departments:[], employees:[]};
// const genList = async() => {
// //Generates the current roles to add to the choice selection
// let roleList = await db.promise().query('SELECT * from roles');
// for (let x=0; x < roleList[0].length; x++){
//     info.roles.push(roleList[0][x].id + " " + roleList[0][x].title)
// }

// //Generates the current department list to add to the choice selection
// let deptList = await db.promise().query('SELECT * from department');
// for (let x=0; x < deptList[0].length; x++){
//     info.departments.push(deptList[0][x].id + " " + deptList[0][x].department_name)
// }

// //Generates the current list of employees for manager selection
// let empList = await db.promise().query('SELECT * from employee');
// for (let x=0; x < empList[0].length; x++){
//    let fullName = empList[0][x].id + " " + empList[0][x].first_name + " " + empList[0][x].last_name
//     info.employees.push(fullName)
// }
// }
// genList();
// Selections for prompt
// const selections = [

//     {type: 'list',
//      name: 'select',
//      message: 'What would you like to do?',
//      choices: ["View All Roles", "View All Departments", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Exit"]
//     },
//     {type: 'input',
//      name: "add_department",
//      message: "Enter new department name:",
//      when: ({select}) => select == 'Add Department'      
//     },
//     {type: 'input',
//     name: "title",
//     message: "Enter role name:",
//     when: ({select}) => select == 'Add Role'      
//    },
//    {type: 'input',
//    name: "salary",
//    message: "Enter salary:",
//    when: ({select}) => select == 'Add Role'      
//   },
//   {type: 'list',
//   name: "department",
//   message: "Select Department",
//   choices: info.departments,
//   when: ({select}) => select == 'Add Role'      
//  },
//     {type: 'input',
//     name: "first_name",
//     message: "Enter first name:",
//     when: ({select}) => select == 'Add Employee'      
//    },
//    {type: 'input',
//     name: "last_name",
//     message: "Enter last name:",
//     when: ({select}) => select == 'Add Employee'      
//    },
//    {type: 'list',
//     name: "title",
//     message: "Select Role",
//     choices: info.roles,
//     when: ({select}) => select == 'Add Employee'      
//    },
//    {type: 'list',
//     name: "manager",
//     message: "Enter manager:",
//     choices: info.employees,
//     when: ({select}) => select == 'Add Employee'      
//    },
//    {type: 'confirm',
//    name: 'exit',
//    message: 'Exit?',
//    when: ({select}) => select == 'Exit'
//    }
// ]


// export { selections as default }