// DEPENDENCIES-----------------
    // Display time element
function setTime(){
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#displayTime").text(today);
}    
// Display modal 
    // table row element
setInterval(setTime, 1000);

// STATE------------------------

// HELPER FUNCTIONS-------------
    // Run the clock
// USER INTERACTIONS------------

// INITIALIZATION---------------

