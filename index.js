import inquirer from "inquirer";
import selections from "./src/selections.js"
import db from './config/connection.js';


//Employee Functions
const addEmp = async (first_name,last_name,title) => {
    let data = await db.promise().query(`INSERT INTO employee (first_name, last_name, title) VALUE ("${first_name}", "${last_name}", "${title}")`);
    console.log(`${first_name} ${last_name} has been added to the roster.`);
    init();
    }

const showAllEmp = async () => {
    let data = await db.promise().query('SELECT * FROM employee')
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
    let data = await db.promise().query('SELECT * from department');
    console.table(data[0])
    init();
}


//Role Functions
const addRole = async (title, salary, department)=>{
    let data = await db.promise().query(`INSERT INTO roles (title, salary, department) VALUE ("${title}", ${salary}, "${department}")`);
    console.log(`${title} has been added to the list of roles.`);
    init(); 
}

const showAllRoles = async () =>{
    let data = await db.promise().query('SELECT * from roles');
    console.table(data[0])
    init();
}

const init = () => {
   inquirer.prompt(selections).then((selection) => {
        const { select, first_name, last_name,exit,manager,title, salary, department, add_department } = selection;
        if(select == 'View All Employees') showAllEmp();
        if(select == 'Add Employee') addEmp(first_name,last_name,title);
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
