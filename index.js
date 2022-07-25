import inquirer from "inquirer";
import selections from "./src/selections.js"
import db from './config/connection.js';

const showAllEmp = async () => {
    let data = await db.promise().query('SELECT * FROM employee')

    console.table(data[0]);
    console.log('\n');
    init();
};

const addEmp = async (first_name,last_name,role_id,manager_id) => {
let data = await db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("${first_name}", "${last_name}", "${role_id}", "${manager_id}")`);
console.log(data);
}

const addDept = async(add_department) =>{
    let data = await db.promise().query(`INSERT INTO department(department_name) VALUE ("${add_department}")`)
}

const showAllDept = async () =>{
    let data = await db.promise().query('SELECT * from department');
    console.table(data[0])
}
const init = () => {
    inquirer.prompt(selections).then((selection) => {
        const { select } = selection;
        if(select == 'View All Employees') showAllEmp();
        if(select == 'Add Employee') addEmp(selection.first_name,selection.last_name,selection.role,selection.manager);
        if(select == 'Add Department') addDept(selection.add_department);
        if(select == 'View All Departments') showAllDept();
    });
};

init();