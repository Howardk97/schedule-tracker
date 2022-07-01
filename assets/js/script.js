// Create a variable to hold the block the time will be displayed in and the current date
var timeBlock = $('#currentDay');
var todayDate = moment().format("dddd, MMMM Do YYYY");

timeBlock.append(todayDate);