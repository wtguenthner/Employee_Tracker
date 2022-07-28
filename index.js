import inquirer from "inquirer";
// import selections from "./src/selections.js";
import db from './config/connection.js';
import ctable from 'console.table'
const info = {roles:[], departments:[], employees:[]};

//Function for generating the list of roles, employees and departments
const generate = async() => {
    
//Generates the current roles to add to the choice selection
let roleList = await db.promise().query('SELECT * from roles');
for (let x=info.roles.length; x < roleList[0].length; x++){
   info.roles.push(roleList[0][x].id + " " + roleList[0][x].title)
   
}

//Generates the current department list to add to the choice selection
let deptList = await db.promise().query('SELECT * from department');
for (let x=info.departments.length; x < deptList[0].length; x++){
    info.departments.push(deptList[0][x].id + " " + deptList[0][x].department_name)
}

//Generates the current list of employees for manager selection
let empList = await db.promise().query('SELECT * from employee');
for (let x=info.employees.length; x < empList[0].length; x++){
   let fullName = empList[0][x].id + " " + empList[0][x].first_name + " " + empList[0][x].last_name
    info.employees.push(fullName)
    
}

}

//List of prompt selections
const selections = [

    {type: 'list',
     name: 'select',
     message: 'What would you like to do?',
     choices: ["View All Roles", "View All Departments", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Exit"]
    },
    {type: 'input',
     name: "add_department",
     message: "Enter new department name:",
     when: ({select}) => select == 'Add Department'      
    },
    {type: 'input',
    name: "title",
    message: "Enter role name:",
    when: ({select}) => select == 'Add Role'      
   },
   {type: 'input',
   name: "salary",
   message: "Enter salary:",
   when: ({select}) => select == 'Add Role'      
  },
  {type: 'list',
  name: "department",
  message: "Select Department",
  choices: info.departments,
  when: ({select}) => select == 'Add Role'      
 },
    {type: 'input',
    name: "first_name",
    message: "Enter first name:",
    when: ({select}) => select == 'Add Employee'      
   },
   {type: 'input',
    name: "last_name",
    message: "Enter last name:",
    when: ({select}) => select == 'Add Employee'      
   },
   {type: 'list',
    name: "title",
    message: "Select Role",
    choices: info.roles,
    when: ({select}) => select == 'Add Employee'      
   },
   {type: 'list',
    name: "manager",
    message: "Enter manager:",
    choices: info.employees,
    when: ({select}) => select == 'Add Employee'      
   },
   {type: 'list',
   name: "update_name",
   message: "Which employee would you like to update?",
   choices: info.employees,
   when: ({select}) => select == 'Update Employee Role'
   },
   {type: 'list',
   name: "update_role",
   message: "What is the employees new role?",
   choices: info.roles,
   when: ({select}) => select == 'Update Employee Role'
   },
   {type: 'confirm',
   name: 'exit',
   message: 'Exit?',
   when: ({select}) => select == 'Exit'
   }
]


//Employee Functions
const addEmp = async (first_name,last_name,title, manager) => {
    let roleID = title.split(" ");
    let managerID = manager.split(" ");
    let data = await db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${first_name}','${last_name}','${roleID[0]}','${managerID[0]}')`);
    console.log(`${first_name} ${last_name} has been added to the roster.`);
    generate();
    init();
    }

const showAllEmp = async () => {
    let data = await db.promise().query(`select a.first_name as "First Name", a.last_name as "Last Name", roles.title as Title, roles.salary as Salary, department.department_name as Department, CONCAT(b.first_name, ' ', b.last_name) as Manager from employee a left join employee b on a.manager_id = b.id left join roles on a.role_id = roles.id left join department ON roles.department_id = department.id`);
    console.table(data[0]);
    
    init();
};


//Department Functions
const addDept = async(add_department) =>{

    let data = await db.promise().query(`INSERT INTO department(department_name) VALUE ("${add_department}")`)
    console.log(`${add_department} has been added to the list of departments`)
    generate();
    init();
}

const showAllDept = async () =>{
    let data = await db.promise().query('SELECT id as ID, department_name as Department from department ');
    console.table(data[0])
    init();
}


//Role Functions
const addRole = async (title, salary, department_id)=>{
    let deptID = department_id.split(" ");
    let data = await db.promise().query(`INSERT INTO roles (title, salary, department_id) VALUE ("${title}", ${salary}, "${deptID[0]}")`);
    console.log(`${title} has been added to the list of roles.`);
    generate();
    init(); 
}

const showAllRoles = async () =>{
    let data = await db.promise().query('SELECT roles.id as ID, roles.title as Title, roles.salary as Salary, department.department_name as Department from roles join department ON roles.department_id = department.id;');
    console.table(data[0])
    init();
}

//Updates the employee role
const update = async (name, role) =>{
    
    let nameSplit = name.split(" ");
    let roleSplit =role.split(" ");
    
        let data = await db.promise().query(`UPDATE employee SET role_id = '${roleSplit[0]}'WHERE first_name = '${nameSplit[1]}'`);
        if(roleSplit.length > 2){
            console.log(`${nameSplit[1]} ${nameSplit[2]}'s role has been updated to ${roleSplit[1]} ${roleSplit[2]}`)
        }else{
        console.log(`${nameSplit[1]} ${nameSplit[2]}'s role has been updated to ${roleSplit[1]}`)
        }
    init();
}
const init = async() => {
   inquirer.prompt(selections).then((selection) => {
        const { select, first_name, last_name,exit,manager,title, salary, department, add_department, role, update_name, update_role } = selection;
        if(select == 'View All Employees') showAllEmp();
        if(select == 'Add Employee') addEmp(first_name,last_name,title, manager);
        if(select == 'Add Department') addDept(add_department);
        if(select == 'View All Departments') showAllDept();
        if(select == 'Add Role') addRole(title, salary, department);
        if(select == 'View All Roles') showAllRoles();
        if(select== 'Update Employee Role') update(update_name, update_role);
        if(select == 'Exit'){
            if(exit){
                console.log('Application closed.')
                process.exit()
            }else{
                init();
            }
        }
    });
  
};

generate();
init();




