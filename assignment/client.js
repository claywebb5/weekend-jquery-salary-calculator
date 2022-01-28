$(document).ready(readyNow);

let employees = []; // This is declaring a global 'employees' empty array

function newEmployee (fNameInput, lNameInput, idInput, titleInput, salaryInput) {
    console.log('In newEmployee:', fNameInput, lNameInput, idInput, titleInput, salaryInput);
    const newEmpObject = {
        first: fNameInput,
        last: lNameInput,
        id: idInput,
        title: titleInput,
        salary: salaryInput
    };
    employees.push(newEmpObject); // This will push the newEmpObject values into the global employees array
    return true;
} // End newEmployee function

function readyNow() {
    console.log('jQuery is working');
    $('.submitButton').on('click', addEmployee);
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
    $('.submitButton').on('click', displayEmp);
    displayEmp();
} // End addEmployee function

function displayEmp() {
    let el = $('#theEmpList'); // This will create a local variable that targets the output ID
    el.empty();
    for(let emp of employees){
        el.append(`<li>` + emp.first + ` ` + emp.last + `, ID: ` + emp.id + `, Title: ` + emp.title + `, Salary: ` + emp.salary + `</li>`);
    };
} // End displayEmp function

// MONTHLY TOTAL IS DIVIDE BY 12