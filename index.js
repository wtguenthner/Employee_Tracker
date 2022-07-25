import inquirer from "inquirer";
import selections from "./src/selections.js"
import Employee from "./lib/Employee.js"
import Department from "./lib/Department.js"
import Role from "./lib/Role.js"
const data = {Departments:[], Employees:[], Roles:[]}
inquirer.prompt(selections).then(ans => {
    if(ans.add_department){
        data.Departments.push(new Department(ans.add_department))
        console.log(data.Departments)
    }
    if(ans.add_role){
        data.Roles.push(new Role (ans.add_role, ans.title, ans.salary, ans.department))
        console.log(data.Roles)

    }
    if(ans.first_name){
        data.Employees.push(new Employee(ans.first_name, ans.last_name, ans.role, ans.manager))
        console.log(data.Employees)
    }

    if(ans.select == 'View All Departments'){
        console.log(data.Departments)
    }
    if(ans.select == 'View All Roles'){
        console.log(data.Roles)
    }
    if(ans.select == 'View All Employees'){
        console.log(data.Employees)
    }



});

export default data;