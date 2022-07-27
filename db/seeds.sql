INSERT INTO department(department_name)
VALUES ( "Accounting"),
       ( "Human Resources"),
       ( "Restaurant"),
       ( "Special Events");


INSERT INTO roles (title, salary, department)
VALUES ( "Accounting Manager", 80000.00, "Accounting"),
        ( "General Manager", 75000.00, "Restaurant"),
        ( "President", 95000.00, "Human Resources"),
        ( "Manager", 60000.00, "Restaurant"),
        ( "Server", 40000.00, 'Restaurant');

INSERT INTO employee(first_name, last_name, title)
    VALUES ("Taylor", "Guenthner", "General Manager"),
            ("John", "Smith", "Accountant"),
            ("Rod", "Sterling", "Server");
    


