use employees; 

INSERT INTO department
    (name)
VALUES
    ('Marketing'),
    ('Booking'),
    ('Facilities'),
    ('Leadership'),
    ('IT');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('VP of External Relations', 250000, 1),
    ('Director of Marketing', 170000, 1),
    ('Talent Buyer', 100000, 2),
    ('Associate Director of Programming', 150000, 2),
    ('Building Manager', 150000, 3),
    ('Committee Director', 200000, 4),
    ('President', 300000, 4),
    ('Sound Technician', 100000, 5),

INSERT INTO employees
    (first_name, last_name, role_id, manager_id)
VALUES  
    ('Courtney', 'M', 1, 6),
    ('Bobby', 'V', 1, 5),
    ('Karolina', 'B', 2, 5),
    ('Jordan', 'Z', 2, 5),
    ('Perry', 'M', 3, 4),
    ('Laura', 'O', 4, 6),
    ('Iffat', 'B', 4, NULL),
    ('Duncan', 'H', 5, 6),