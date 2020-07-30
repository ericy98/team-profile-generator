const inquirer = require('inquirer');
// const Employee = require('./lib/Employee');
// const Manager = require('./Manager');

function begin() {
    console.log("Let's get started!")
    inquirer
    .prompt({
        type: 'list',
        name: 'role', 
        message: "First, what is the role of the employee?",
        choices: ['Manager', 'Engineer', 'Intern']
    })
    .then(choice => {
        switch (choice.role) {
            case 'Manager':
                getManager();
                break;
            case 'Engineer':
                getEngineer();
                break;
            case 'Intern': 
                getIntern();
                break;
        }
    });
    
};

function getManager() {

};

function getEngineer() {

};

function getIntern() {

};

begin();