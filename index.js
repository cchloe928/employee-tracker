const inquirer = require('inquirer')
const fs = require
const mysql = require('mysql2')
// const ctable = require('console.table')
const PORT = 3001 
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'employees_db',
    port: 3306
})

function mainQ(){
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do next?",
            name: "doNext",
            choices: ["View All Employees", "Add Employee", "Delete Employee", "Update Employee", "View All Employee Roles", "Add Employee Role", "Delete Employee Role", "Update Employee Role",  "View All Departments", "Add Department", "Delete Department", "Update Department"]
        }
    ])
    .then(ans => {
        console.log(ans)
        if(ans.doNext == "View All Employees"){
            connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }
        else if (ans.doNext == "Add Employee") {
            connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }
        else if (ans.doNext == "Delete Employee") {
            connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }        else if (ans.doNext == "Update Employee") {
            connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }
    })
    .then(ans => {
        console.log(ans)
        if(ans.doNext == "View All Employee Roles"){
            connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }
        else if (ans.doNext == "Add Employee Role") {
            connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }
        else if (ans.doNext == "Delete Employee Role") {
            connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }        else if (ans.doNext == "Update Employee Role") {
            connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }
    })
    .then(ans => {
        console.log(ans)
        if(ans.doNext == "View All Departments"){
            connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }
        else if (ans.doNext == "Add Department") {
            connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }
        else if (ans.doNext == "Delete Department") {
            connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }        else if (ans.doNext == "Update Department") {
            connection.query("SELECT * FROM employee", (err, res) => {
                if (err) throw err;
                console.table(res)
            })
        }
    })




    
}

connection.connect(err =>{
    if (err) throw err;
    else {console.log("connected at localhost:"+PORT)}
})

mainQ()