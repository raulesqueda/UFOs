// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
  console.log("Hello there!");
}

// Takes two numbers and adds them
function addition(a, b) {
  return a + b;
}

// Functions can call other functions
function doubleAddition(c, d) {
  var total = addition(c, d) * 2;
  return total;
}


// Simple JavaScript log statement
function printHello() {
  return "Hello there!";
}

printHello = () => "Hello there!";

// Original addition function
function addition(a, b) {
  return a + b;
}

// Converted to an arrow function
addition = (a, b) => a + b;

// Original doubleAddition function
function doubleAddition(c, d) {
  var total = addition(c, d) * 2;
  return total;
}

doubleAddition = (c, d)

// Loops

function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
}

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

listLoop(friends);

// Arraw vegetables 
let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
  console.log("I love " + vegetables[i]);
}

// Other loop
for (var i = 0; i < 5; i++) {
  console.log("I am " + i);
}

// Creating a Table
function buildTable(data) {
  tbody.html("");
}

// forEach function
data.forEach((dataRow) => {
  let row = tbody.append("tr");
  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    }
  );
});

// Complete builtTable
function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
}
var data = [
    {
      datetime: "1/1/2010",
      city: "benton",
      state: "ar",
      country: "us",
      shape: "circle",
      durationMinutes: "5 mins.",
      comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
    },
    {
      datetime: "1/1/2010",
      city: "bonita",
      state: "ca",
      country: "us",
      shape: "light",
      durationMinutes: "13 minutes",
      comments: "Three bright red lights witnessed floating stationary over San Diego New Years Day 2010"
    },