const http = require("http");
const url = require("url");
const express = require("express");

const app = express();

function getCurrentUTCTimeWithWindow() {
  const now = new Date();

  // Get the current UTC time in milliseconds
  const currentUTCTime = now.getTime() + now.getTimezoneOffset() * 60 * 1000;

  // Generate a random number between -120000 (2 minutes in milliseconds) and 120000
  const randomOffset = Math.floor(Math.random() * 240000) - 120000;

  // Add the random offset to the current UTC time
  const adjustedUTCTime = currentUTCTime + randomOffset;

  // Create a new Date object with the adjusted time
  const adjustedDate = new Date(adjustedUTCTime);

  return adjustedDate.toISOString();
}

function getCurrentDayOfTheWeek() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();

  const currentDayName = daysOfWeek[currentDayOfWeek];

  return currentDayName;
}

const server = http.createServer((req, res) => {
  // we check if the request is a get request
  if (req.method.toLowerCase() === "get") {
    const urlParts = url.parse(req.url, true);
    const query = urlParts.query;

    // we check if there is a query or else we return an error
    if (!query || !query?.slack_name || !query?.track) {
      return res
        .writeHead(501, { "content-type": "application/json" })
        .end(JSON.stringify({ error: "query parameters slack_name and track is compulsory" }));
    }

    const data = {
      slack_name: query.slack_name,
      current_day: getCurrentDayOfTheWeek(),
      track: query.track,
      utc_time: getCurrentUTCTimeWithWindow(),
      github_file_url: "https://github.com/kingsley-sunny/zuri-stage-1-task/blob/main/app.js",
      github_repo_url: "https://github.com/kingsley-sunny/zuri-stage-1-task",
      status_code: 200,
    };

    return res.writeHead(200, { "content-type": "application/json" }).end(JSON.stringify(data));
  } else {
    res
      .writeHead(501, { "content-type": "application/json" })
      .end(JSON.stringify({ error: "Please use a get request" }));
  }
});

server.listen(8000);
