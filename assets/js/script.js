// Create a variable to hold the block the time will be displayed in, current time, and save buttons
var timeBlock = $('#currentDay');
var todayDate = moment().format("dddd, MMMM Do YYYY");
var saveButtons = $('.btn');

// Variables that hold input elements
var savedInput9AM = $('#input-9-am');
var savedInput10AM = $('#input-10-am');
var savedInput11AM = $('#input-11-am');
var savedInput12PM = $('#input-12-pm');
var savedInput1PM = $('#input-1-pm');
var savedInput2PM = $('#input-2-pm');
var savedInput3PM = $('#input-3-pm');
var savedInput4PM = $('#input-4-pm');
var savedInput5PM = $('#input-5-pm');

// Attach today
timeBlock.append(todayDate);

// Create an array to contain the inputs from the schedule
var inputArrayBlock = [$('#input-9-am'), 
                        $('#input-10-am'), 
                        $('#input-11-am'), 
                        $('#input-12-pm'),
                        $('#input-1-pm'),
                        $('#input-2-pm'),
                        $('#input-3-pm'),
                        $('#input-4-pm'),
                        $('#input-5-pm')];

// loop that iterates through the array that contains the inputs and changes colors of the blocks depeding on time of day
for (var i = 0; i < inputArrayBlock.length; i++) {
    if (moment().hour() > i + 9) {
        inputArrayBlock[i].css('background-color', 'lightgrey');
    } else if (moment().hour() === i + 9) {
        inputArrayBlock[i].css('background-color', '#fe663e');
    } else {
        inputArrayBlock[i].css('background-color', '#52ff6d');
    }
}

// function that is generated when any save button is clicked
function saveInput() {
    // variables that hold values for input
    var input9AM = $('input[name="user-input-9-am"]').val();
    var input10AM = $('input[name="user-input-10-am"]').val();
    var input11AM = $('input[name="user-input-11-am"]').val();
    var input12PM = $('input[name="user-input-12-pm"]').val();
    var input1PM = $('input[name="user-input-1-pm"]').val();
    var input2PM = $('input[name="user-input-2-pm"]').val();
    var input3PM = $('input[name="user-input-3-pm"]').val();
    var input4PM = $('input[name="user-input-4-pm"]').val();
    var input5PM = $('input[name="user-input-5-pm"]').val();

    console.log(input9AM);

    // store input in local storage
    localStorage.setItem("userInput9AM", input9AM);
    localStorage.setItem("userInput10AM", input10AM);
    localStorage.setItem("userInput11AM", input11AM);
    localStorage.setItem("userInput12PM", input12PM);
    localStorage.setItem("userInput1PM", input1PM);
    localStorage.setItem("userInput2PM", input2PM);
    localStorage.setItem("userInput3PM", input3PM);
    localStorage.setItem("userInput4PM", input4PM);
    localStorage.setItem("userInput5PM", input5PM);
}

// add listener to buttons
saveButtons.on("click", saveInput);

// Create variables to hold user input
var userInputText9AM = localStorage.getItem("userInput9AM");
var userInputText10AM = localStorage.getItem("userInput10AM");
var userInputText11AM = localStorage.getItem("userInput11AM");
var userInputText12PM = localStorage.getItem("userInput12PM");
var userInputText1PM = localStorage.getItem("userInput1PM");
var userInputText2PM = localStorage.getItem("userInput2PM");
var userInputText3PM = localStorage.getItem("userInput3PM");
var userInputText4PM = localStorage.getItem("userInput4PM");
var userInputText5PM = localStorage.getItem("userInput5PM");

// display user input on page
savedInput9AM.val(userInputText9AM);
savedInput10AM.val(userInputText10AM);
savedInput11AM.val(userInputText11AM);
savedInput12PM.val(userInputText12PM);
savedInput1PM.val(userInputText1PM);
savedInput2PM.val(userInputText2PM);
savedInput3PM.val(userInputText3PM);
savedInput4PM.val(userInputText4PM);
savedInput5PM.val(userInputText5PM);


