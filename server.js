const inquirer = require('inquirer');
const db = require('./db/connection');

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    startQuestions();
});
 

//Initial question for the user to decide what they would like to do
const questions = [
    {
        type: 'list',
        name: 'initialQuestion',
        message: "What would you like to do?",
        choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role', 'Cancel']
    },
]