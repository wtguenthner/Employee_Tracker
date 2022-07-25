INSERT INTO department(department_name)
VALUES ( "Accounting"),
       ( "Human Resources"),
       ( "Restaurant"),
       ( "Special Events");


INSERT INTO roles (title, salary, department)
VALUES ( "Accounting Manager", 80000.00, 1),
        ( "General Manager", 75000.00, 3),
        ( "President", 95000.00,  2),
        ( "Manager", 60000.00, 3),
        ( "Server", 40000.00, 3);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
    VALUES ("Taylor", "Guenthner", 2, 3),
            ("John", "Smith", 1, 3),
            ("Rod", "Sterling", 5, 2);
    


