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
    displayEmp(newEmpObject);
    deleteButton(newEmpObject);
    return true;
} // End newEmployee function

function readyNow() {
    console.log('jQuery is working');
    $('.submitButton').on('click', addEmployee);
    $('.submitButton').on('click',capMonthlyTotal);
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
    
    monTotal = 0;
    // $('#theEmpList').empty();
    $('#theEmpList').append(`<tr><td>${first}</td><td>${last}</td><td>${id}</td><td>${title}</td><td>${salary}</td><td><button id="theDeleteButton">${'Delete'}</button></td></tr>`);
    monthlyTotal(salary);


    return true;
} // End addEmployee function

function displayEmp(obj) {
    
    console.log('In displayEmp');
    // monTotal = 0;
    // $('#theEmpList').empty();
    // $('#theEmpList').append(`<tr><td>${obj.first}</td><td>${obj.last}</td><td>${obj.id}</td><td>${obj.title}</td><td>${obj.salary}</td><td><button id="theDeleteButton">${'Delete'}</button></td></tr>`);
    //     monthlyTotal(obj.salary);
    // for (let emp of employees){
    //     $('#theEmpList').append(`<tr><td>${emp.first}</td><td>${emp.last}</td><td>${emp.id}</td><td>${emp.title}</td><td>${emp.salary}</td><td><button id="theDeleteButton">${'Delete'}</button></td></tr>`);
    //     monthlyTotal(emp.salary);
    // }; // End for of loop
    $('#theDeleteButton').on('click', deleteButton);
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

function deleteButton(){
    console.log('this is:', $(this));
    $(this).parents("tr").remove();
    
} // End deleteButton function




function capMonthlyTotal(){
    // console.log('Monthly Total Cap Reached!');
    if (monTotal > 20000) {
        $('#monTotCap').css('background-color', 'red');
    }
    
    
} // End capMonthlyTotal function