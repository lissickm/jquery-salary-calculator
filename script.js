console.log('js');

$(document).ready(readyNow);

let salaries = [];

function readyNow() {
    console.log("DOM is ready!");

    // event listeners
    $('#submitButton').on('click', addInfoToTable);
    $('#submitButton').on('click', displayTotalSalaries);
    $('#submitButton').on('click', clearInputs);
    $('#employeeInformation' ).on("click", '#deleteButton', clearTableRow);
    
}

function clearTableRow() {
    console.log('delete button was clicked');
   
    let $row = $(this).closest("tr"),       // Finds the closest row <tr> 
        $tds = $row.find("td");             // Finds all children <td> elements

    $.each($tds, function () {               // Visits every single <td> element
        console.log($(this).text());        // Prints out the text within the <td>
        $tds.remove();
    });

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
    
    $('#employeeInformation').append(`<tr>` + `<td>` + $('#firstNameInput').val() + `</td>` + `<td>` + $('#lastNameInput').val() + `</td>` + `<td>` + $('#idInput').val() + `</td>` + `<td>` + $('#titleInput').val() + `</td>` + `<td class="tableSalary">` + "$" + $('#annualSalaryInput').val() + `</td>` + `<td class="tdDelButLocation">` + `<button id="deleteButton" class="btn btn-danger">` + "delete" + `</button>` + `</td>` + `</tr>`);
   
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

