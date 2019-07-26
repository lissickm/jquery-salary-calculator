console.log('js');

$(document).ready(readyNow);



function readyNow() {
    console.log("DOM is ready!");

    // event listeners
    $('#submitButton').on('click', addInfoToTable);
    
}

function addInfoToTable () {
    console.log('clicked');
    $('#employeeInformation').append(`<tr>` + `<td>` + $('#firstNameInput').val() + `</td>` + `<td>` + $('#lastNameInput').val() + `</td>` + `<td>` + $('#idInput').val() + `</td>` + `<td>` + $('#titleInput').val() + `</td>` + `<td>` + "$" + $('#annualSalaryInput').val() + `</td>`
    
    
    
    +`</tr>`)
}
