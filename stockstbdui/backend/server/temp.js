const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

//read in the file names
//fix the name to a certain format.
//create a csv file
//make a loop

// Directory containing the image files
const directory = "./s&p500images";

const fileDirectory = "./";
const fileName = "constituents.csv";

fs.createReadStream(fileDirectory + fileName)
  .pipe(
    csv({
      mapHeaders: ({ header }) => header.trim(), // Trim headers
      mapValues: ({ header, value }) => value.trim(), // Trim values
    })
  )
  .on("data", (row) => {
    // This callback will be called for each row in the CSV file
    console.log(row);
  })
  .on("end", () => {
    // This callback will be called when the parsing is finished
    console.log("CSV file parsed successfully");
  })
  .on("error", (error) => {
    // This callback will be called if there's an error during parsing
    console.error("Error parsing CSV file:", error);
  });

// Name to search for
const searchNameSVG = "3m.svg";
const searchNamePNG = "ibm.png";

const symbol = "IBM";
const buyOrSell = "buy";

const companySector = "";

let found = "";
fs.readdir(directory, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err);
    return;
  }

  // Check if the search name exists in the list of files
  if (files.includes(searchNameSVG)) {
    console.log("Found:", searchNameSVG);
    found = searchNameSVG;
  } else if (files.includes(searchNamePNG)) {
    console.log("Found:", searchNamePNG);
    found = searchNamePNG;
  } else {
    console.log("Not found:", searchNameSVG);
    found = "default.svg";
  }
});

const companyList = [];

companyList.push({
  ticker: symbol,
  name: "name",
  image: found,
  price: 100.0,
  prediction: buyOrSell,
  percentage: "2.7%",
  sector: companySector,
});
