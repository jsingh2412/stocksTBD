const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 3001;

// Apply CORS middleware to all routes
app.use(cors());

const alphaVantageEndpoint = "https://www.alphavantage.co/query";
const func = "TIME_SERIES_DAILY";
const alphaKey = "";

app.get("/alphaData", async (req, res) => {
  try {
    const { symbol } = req.query;
    const alphaUrl = `${alphaVantageEndpoint}?function=${func}&symbol=${symbol}&apikey=${alphaKey}`;
    const response = await axios.get(alphaUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const endpoint = "https://api.stlouisfed.org/fred/series/observations";
const seriesId = "SP500";
const apiKey = "";
const fileType = "json";
const observationStart = "2022-03-17";
const observationEnd = "2023-03-17";

const apiUrl = `${endpoint}?series_id=${seriesId}&api_key=${apiKey}&file_type=${fileType}&observation_start=${observationStart}&observation_end=${observationEnd}`;
app.get("/data2", async (req, res) => {
  try {
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// const keys = Object.keys(response.data["Time Series (Daily)"]);
// const dateObj = response.data["Time Series (Daily)"][keys[0]];
// const values = Object.values(dateObj);
// console.log(keys[0]);
// console.log(values[3]);
// let buyOrSell = "";
// if (values[0] < values[3]) {
//   buyOrSell = "sell";
// } else {
//   buyOrSell = "buy";
// }

// //find matching image.

// console.log(companyList);
