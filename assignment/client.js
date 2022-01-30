$(document).ready(readyNow);

let employees = []; // This is declaring a global 'employees' empty array
let monTotal = 0;

function newEmployee (fNameInput, lNameInput, idInput, titleInput, salaryInput) {
    console.log('In newEmployee:', fNameInput, lNameInput, idInput, titleInput, salaryInput);
    const newEmpObject = {
        first: fNameInput,
        last: lNameInput,
        id: Number(idInput),
        title: titleInput,
        salary: Number(salaryInput)
    };
    employees.push(newEmpObject); // This will push the newEmpObject values into the global employees array
    return true;
} // End newEmployee function

function readyNow() {
    console.log('jQuery is working');
    $('.submitButton').on('click', addEmployee);
    // $('.submitButton').on('click', monthlyTotal);
} // End readyNow function

function addEmployee(){
    console.log('In addEmployee');
    let first = $('#firstNameField').val();
    let last = $('#lastNameField').val();
    let id = $('#idField').val();
    let title = $('#titleField').val();
    let salary= $('#annualSalaryField').val();
    newEmployee(first, last, id, title, salary);
    console.log('Added Employees are:', employees); // This will display the employees in the console
    $('#firstNameField').val('');
    $('#lastNameField').val('');
    $('#idField').val('');
    $('#titleField').val('');
    $('#annualSalaryField').val('');
    // $('.submitButton').on('click', displayEmp);
    displayEmp();
    return true;
} // End addEmployee function

function displayEmp() {
    console.log('In displayEmp');
    monTotal = 0;
    $('#theEmpList').empty();
    for (let emp of employees){
        $('#theEmpList').append(`<tr><td>${emp.first}</td><td>${emp.last}</td><td>${emp.id}</td><td>${emp.title}</td><td>${emp.salary}</td><td><button>${'Delete'}</button></td></tr>`);
        monthlyTotal(emp.salary);
    }; // End for of loop
    
} // End displayEmp function

function monthlyTotal(salary){
    console.log('In monthlyTotal');
    $('#monthly-total').empty(); // This will clear the Total Monthly on the DOM
    // salary /= 12;
    monTotal += salary / 12;
    $('#monthly-total').append(Math.round(monTotal));

    // return monTotal;
    console.log('In monthlyTotal:', monTotal);
}
// MONTHLY TOTAL IS DIVIDE BY 12

// console.log('In monthlyTotal:', monTotal);