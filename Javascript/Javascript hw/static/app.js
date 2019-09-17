// from data.js
var tableData = data;

/* * * * * * * * * * * * * * * * * * * * *
    PART 1 - Creating the initial table
* * * * * * * * * * * * * * * * * * * * */

// select tbody 
tbody = d3.select("tbody")

// for loop through the data array (of sightings dictionaries)
for (let i = 0; i < data.length; i += 1) {
    // console.log(data[i]); //data[0], data[1], data[2], ...
    // grab reference to the dictionary and storing it in a variable
    let sighting = data[i];

    // creating a row and adding it to the table body
    let row = tbody.append('tr');

    // create 7 cells with their respective values and adding them to the row
    // Date	City	State	Country	Shape	Duration	Comments
    row.append('td').text(sighting['datetime']);
    row.append('td').text(sighting['city']);
    row.append('td').text(sighting['state']);
    row.append('td').text(sighting['country']);
    row.append('td').text(sighting['shape']);
    row.append('td').text(sighting['durationMinutes']);
    row.append('td').text(sighting['comments']);

}

/* * * * * * * * * * *
  PART 2 - Filtering
* * * * * * * * * * */

// initiate the variables
// get date input field element
var $dateInput = d3.select("#datetime");
// get button element
var $searchBtn = d3.select("#filter-btn");

// call handleSearchButtonClick when click search button
$searchBtn.on('click', handleSearchButtonClick);

// function to handle search button
function handleSearchButtonClick() {
    // prevents the page from refreshing when an action is done
    d3.event.preventDefault();

    // extract the text from the dateInput element
    var userDate = $dateInput.property('value');
    console.log('userDate:', userDate);

    // clear the html (delete all of the old rows)
    tbody.html('');

    // for loop, but filtering out only what matches the input
    for (let i = 0; i < data.length; i += 1) {
        // console.log(data[i]); //data[0], data[1], data[2], ...
        // grab reference to the dictionary and storing it in a variable
        let sighting = data[i];

        if (sighting['datetime'] == userDate) {

            // creating a row and adding it to the table body
            let row = tbody.append('tr');

            // create 7 cells with their respective values and adding them to the row
            // Date	City	State	Country	Shape	Duration	Comments
            row.append('td').text(sighting['datetime']);
            row.append('td').text(sighting['city']);
            row.append('td').text(sighting['state']);
            row.append('td').text(sighting['country']);
            row.append('td').text(sighting['shape']);
            row.append('td').text(sighting['durationMinutes']);
            row.append('td').text(sighting['comments']);

        }

    }
}