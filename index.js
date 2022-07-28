import inquirer from "inquirer";
import selections from "./src/selections.js";
import db from './config/connection.js';


//Employee Functions
const addEmp = async (first_name,last_name,title,role_id, manager_id) => {
    let data = await db.promise().query(`INSERT INTO employee (first_name, last_name, title, manager) VALUE ("${first_name}", "${last_name}", "${title}", "${manager}")`);
    console.log(`${first_name} ${last_name} has been added to the roster.`);
    init();
    }

const showAllEmp = async () => {
    let data = await db.promise().query(`select employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id, roles.title, roles.salary, roles.id, department.id from employee left join roles on employee.role_id = roles.id left join department ON roles.department_id = department.id`);
    console.table(data[0]);
    init();
};


//Department Functions
const addDept = async(add_department) =>{
    let data = await db.promise().query(`INSERT INTO department(department_name) VALUE ("${add_department}")`)
    console.log(`${add_department} has been added to the list of departments`)
    init();
}

const showAllDept = async () =>{
    let data = await db.promise().query('SELECT id as ID, department_name as Department from department');
    console.table(data[0])
    init();
}


//Role Functions
const addRole = async (title, salary, department_id)=>{
    let data = await db.promise().query(`INSERT INTO roles (title, salary, department) VALUE ("${title}", ${salary}, "${department}")`);
    console.log(`${title} has been added to the list of roles.`);
    init(); 
}

const showAllRoles = async () =>{
    let data = await db.promise().query('SELECT id as ID, title as Title, salary as Salary, department as Department from roles');
    console.table(data[0])
    init();
}

const init = () => {
   inquirer.prompt(selections).then((selection) => {
        const { select, first_name, last_name,exit,manager,title, salary, department, add_department } = selection;
        if(select == 'View All Employees') showAllEmp();
        if(select == 'Add Employee') addEmp(first_name,last_name,title,manager);
        if(select == 'Add Department') addDept(add_department);
        if(select == 'View All Departments') showAllDept();
        if(select == 'Add Role') addRole(title, salary, department);
        if(select == 'View All Roles') showAllRoles();

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



init();
