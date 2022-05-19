# group-project1

Live Link: 


Task 1: HTML Build
Create a header/hero area that welcomes users to the application and displays the current time and date using Moment.js with setInterval().

Create a Bootstrap card component explaining the instructions of how to use the app and a button to open a Bootstrap modal dialog.

The modal should contain a form asking users to fill in the following data:

The name of the project

The type of project (use a <select> drop-down)

The hourly wage for the project

The due date for the project (use jQuery UI's datepicker with a minimum date setting in place)

Include a Bootstrap table that the project's information can be printed to with columns for the following data:

Project name

Project type

Hourly wage

Due date

Days until the due date (use Moment.js to calculate)

Estimated total earned (hourly wage at 8 hours per day multiplied by the number of days until the due date)

While you build, remember the following guidelines:

Ensure that any elements you need to interact with using JavaScript/jQuery are properly identified (e.g., form elements, the table body, etc.).

Use different <input> element attributes to help enforce rules, like different type attribute values, minimum values, and required! See the MDN web docs on the HTML input element for more guidance.

When in doubt, read the Bootstrap documentation.

Task 2: Capture Form Data
Using jQuery, set up functionality to capture the form's input elements on submit and use that data to create a new table row on the page.

Select and save references to every DOM element we will interact with to a variable (i.e., var projectFormEl = $("#project-form");) so that we can use these elements later.

Attach a submit event listener to the <form> element using jQuery.

On submission, capture the four input values from the form and pass them to another function to handle printing project data. Having one function that captures the data and another that prints the data to the page's <table> element will improve code readability.

Task 3: Print Project Data to Page
Create a function that will accept the four input fields' data as arguments.

Create a table row (<tr>) element and save it to a variable.

Create a table detail (<td>) element for each of the table columns created in Task 1.

For printing the days to the due date, use Moment.js to calculate the difference between the due date and the current time in days.

For printing the estimated total earned amount, assume that you work an eight-hour day. So multiply the hourly rate by 8 to get the daily rate, then multiply that value by how many days until the project is due to get the estimated total earned.

Append all <td> elements to the table row created, then append the entire row to the <tbody> element on the page.

Don't forget to close the modal when done!

Task 4: Delete a Project From the Table
Update the table to accommodate one more column without a name.

When generating a new <tr> for a project, add one more <td> that holds a button for deleting a project from the list.

Use jQuery event delegation to attach an event listener to each of those buttons so that when clicked, the parent <tr> element will be removed from the page.