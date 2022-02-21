INSERT INTO departments (dept_name)
VALUES
('Executive'),
('Finance'),
('Marketing'),
('Sales'),
('HR'),
('IT');

INSERT INTO roles (title, salary, department_id)
VALUES
('CEO', 2000000, 1),
('Senior Accountant', 185000, 2),
('Marketing Specialist', 110000, 3),
('Sales Rep', 90000, 4),
('Head of HR', 80000, 5),
('Senior Web Developer', 350000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('Alex', 'Williams', 1, 123),
  ('Blake', 'Hayes', 2, 687),
  ('Chris', 'Ruffer', 3, 877),
  ('Katherine', 'Dond', 4, 676),
  ('Dora', 'Li', 5, 670),
  ('Kevin', 'Ong', 6, 211);
  