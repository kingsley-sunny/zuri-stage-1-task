const http = require("http");
const url = require("url");
const express = require("express");
const { getCurrentUTCTimeWithWindow, getCurrentDayOfTheWeek } = require("./functions/functions");
const { router } = require("./router");

const app = express();

app.use("/api", router);

app.use((req, res, next) => {
  res.status(500).json({ error: "query parameters slack_name and track is compulsory" });
});

app.listen(8000);
