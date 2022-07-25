const selections = [

    {type: 'list',
     name: 'select',
     message: 'What would you like to do?',
     choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Exit']
    },
    {type: 'input',
     name: "add_department",
     message: "Enter new department name:",
     when: ({select}) => select == 'Add Department'      
    },
//     {type: 'input',
//      name: "add_role",
//      message: "Enter new role name:",
//      when: ({select}) => select == 'Add Role'      
//     },
//     {type: 'input',
//     name: "title",
//     message: "Enter title name:",
//     when: ({select}) => select == 'Add Role'      
//    },
//    {type: 'input',
//    name: "salary",
//    message: "Enter salary:",
//    when: ({select}) => select == 'Add Role'      
//   },
//   {type: 'input',
//   name: "department",
//   message: "Enter department name:",
//   when: ({select}) => select == 'Add Role'      
//  },
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
   {type: 'input',
    name: "role",
    message: "Enter role ID:",
    when: ({select}) => select == 'Add Employee'      
   },
   {type: 'input',
    name: "manager",
    message: "Enter manager ID:",
    when: ({select}) => select == 'Add Employee'      
   },
//    {type: 'confirm',
//    name: 'exit',
//    message: 'Exit?',
//    when: ({select}) => select == 'Exit'
//    }


]

export default selections;