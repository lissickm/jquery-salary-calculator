console.log('js');

$(document).ready(readyNow);



function readyNow() {
    console.log("DOM is ready!");

    // event listeners
    $('#submitButton').on('click', addFirstName);

}

function addFirstName () {
    console.log('clicked');
    $('#employeeInformation').append(`<tr><td>` + $('#firstNameInput').val() + `</td></tr>`)
}