# Employee-Tracker
Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.


## User Story

```
As a business owner
I want to be able to view and manage the departments, roles, and employees in my company
So that I can organize and plan my business
```

This application allows the user to:

  * View All Employees
  * View All Departments
  * View All Roles
  * Add An Employee
  * Update An Employee's Role
  * Add A Department
  * Add A Role


## How to Use
* Install node.js
* Download repo: https://github.com/wangjiayususan/Employee-Tracker.git
* Install MySQL
* Change password in server.js to your root user password of your mysql DBMS.
* Open your terminal and go into the corresponding directory. Run "node app.js" to start your journey in employee database.


## Database

The database contains three tables:

* **departments**:
  * **id** 
  * **dept_name** 

* **roles**:
  * **id** 
  * **title** 
  * **salary** 
  * **department_id** 

* **employees**:

  * **id** 
  * **first_name** 
  * **last_name** 
  * **role_id** 
  * **manager_id** 

## Walkthrough video
