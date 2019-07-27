console.log('js');

$(document).ready(readyNow);

let salaries = [];

function readyNow() {
    console.log("DOM is ready!");

    // event listeners
    $('#submitButton').on('click', addInfoToTable);
    $('#submitButton').on('click', displayTotalSalaries);
    $('#submitButton').on('click', clearInputs);
    
    
    
}

function displayTotalSalaries() {
    // takes the annual salary input and displays the sum at the bottom of the page
    
    $("#totalMonthlySalary").append(`<p>` + salaries +`</p>`)
    // takes salary input and places it in an array
    salaries.push($('#annualSalaryInput').val());
    // for loop to add the values in the array
    let sum = 0;
    for (i=0; i<salaries.length; i++) {
        sum = parseInt(sum) + parseInt(salaries[i]);

        console.log(salaries);
        console.log(sum);    
    }

    $("#totalMonthlySalary").text('Total Salaries: $' + sum);
}


function addInfoToTable () {
    // adds input values to table upon click

    console.log('clicked');
    $('#employeeInformation').append(`<tr>` + `<td>` + $('#firstNameInput').val() + `</td>` + `<td>` + $('#lastNameInput').val() + `</td>` + `<td>` + $('#idInput').val() + `</td>` + `<td>` + $('#titleInput').val() + `</td>` + `<td id="tableSalary">` + "$" + $('#annualSalaryInput').val() + `</td>` + `<td>` + `<button>` + "delete" + `</button>` + `</td>` + `</tr>`);
    $('#firstNameInput').val(' ');
}

function clearInputs () {
    // clears the values from the inputs upon click
    
    console.log('input cleared');
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');     
}