console.log('js');

$(document).ready(readyNow);

let salaries = [];

function readyNow() {
    console.log("DOM is ready!");

    // event listeners
    $('#submitButton').on('click', addInfoToTable);
    $('#submitButton').on('click', displayTotalSalaries);
    $('#submitButton').on('click', clearInputs);
    $('.deleteButton').on('click', clearTableRow);
      
}

function clearTableRow() {
    console.log('delete button was clicked');
    $(this).closest("tr").remove();

}

function displayTotalSalaries() {
    // takes salary input and places it in an array
    
    salaries.push($('#annualSalaryInput').val());
    // for loop to add the values in the array
    let sumAnnualSalaries = 0;
    for (i=0; i<salaries.length; i++) {
        sumAnnualSalaries = parseInt(sumAnnualSalaries) + parseInt(salaries[i]);

        console.log(salaries);
        console.log(sumAnnualSalaries);    
    }
    let sumMonthlySalaries = sumAnnualSalaries/12;

    console.log("sum of monthly salaries: " + sumMonthlySalaries);
    
    $("#totalMonthlySalary").text('Total Monthly: $' + Math.round(sumMonthlySalaries));

    if(sumMonthlySalaries >= 20000) {  
        $("#totalMonthlySalary").css("background-color", "red");
    }
}    


function addInfoToTable () {
    // adds input values to table upon click

    console.log('submit button clicked');
    $('#employeeInformation').append(`<tr>` + `<td>` + $('#firstNameInput').val() + `</td>` + `<td>` + $('#lastNameInput').val() + `</td>` + `<td>` + $('#idInput').val() + `</td>` + `<td>` + $('#titleInput').val() + `</td>` + `<td id="tableSalary">` + "$" + $('#annualSalaryInput').val() + `</td>` + `<td>` + `<button class="btn btn-danger">` + "delete" + `</button>` + `</td>` + `</tr>`);
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

function clearTableRow() {
    console.log('delete button was clicked');
    
}