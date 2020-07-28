const inquirer = require('inquirer');

function Employee() {
    this.name;
    this.id;
    this.email;
};

Employee.prototype.getName = function() {
    inquirer
    .prompt({
        type: 'text',
        name: 'name', 
        message: "What is the employee's name?"
    })
    .then(({ name }) => {
        this.employee = new Employee(name);
        this.getID();
    });
};

Employee.prototype.getID = function() {
    inquirer
    .prompt({
        type: 'text', 
        name: 'id', 
        message: "What is the employee's Id number?"
    })
    .then(({ id }) => {
        this.employee = new Employee(id);
        this.getEmail();
    });
};

Employee.prototype.getEmail = function() {
    inquirer
    .prompt({
        type: 'text', 
        name: 'email', 
        message: "What is the employee's email address?"
    })
    .then(({ email }) => {
        this.employee = new Employee(email);
        this.getRole();
    });
};

Employee.prototype.getRole = function() {
    inquirer
    .prompt({
        type: 'list', 
        name: 'role', 
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
    })
    .then(({ role }) => {
        this.employee = new Employee(role);
        console.log('Generating Employee Page... hang on a second!')
    })
};


module.exports = Employee;