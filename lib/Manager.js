const Employee = require('../lib/Employee');
const inquirer = require('inquirer');

class Manager extends Employee {

    constructor(name, id, email, office) {
      super(name, id, email);
      this.officer = office;
    }
  
    getRole() {
      return "Manager";
    }
  
    getOffice() {
      return this.office;
    }
  
  }

module.exports = Manager;