console.log('js');

$(document).ready(readyNow);



function readyNow() {
    console.log("DOM is ready!");

    // event listeners
    $('#submitButton').on('click', addInfoToTable);
    $('#submitButton').on('click', clearInputs);
    
}

function addInfoToTable () {
    // adds input values to table upon click

    console.log('clicked');
    $('#employeeInformation').append(`<tr>` + `<td>` + $('#firstNameInput').val() + `</td>` + `<td>` + $('#lastNameInput').val() + `</td>` + `<td>` + $('#idInput').val() + `</td>` + `<td>` + $('#titleInput').val() + `</td>` + `<td>` + "$" + $('#annualSalaryInput').val() + `</td>` + `<td>` + `<button>` + `</button>` + `</td>` + `</tr>`);
    $('#firstNameInput').val(' ');
}

function clearInputs () {
    console.log('input cleared');
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');     
}