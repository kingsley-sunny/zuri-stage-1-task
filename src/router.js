const { getCurrentDayOfTheWeek, getCurrentUTCTimeWithWindow } = require("./functions/functions");

const Router = require("express").Router;

const router = Router();

router.get("/", (req, res, next) => {
  console.log(req.query);

  if (!req.query.slack_name || !req.query.track) {
    return res.status(500).json({
      error:
        "query parameters slack_name and track is compulsory! and it must be prefixed with /api",
    });
  }

  const { slack_name, track } = req.query;

  const data = {
    slack_name,
    current_day: getCurrentDayOfTheWeek(),
    track,
    utc_time: new Date().toISOString(),
    github_file_url: "https://github.com/kingsley-sunny/zuri-stage-1-task/blob/main/src/app.js",
    github_repo_url: "https://github.com/kingsley-sunny/zuri-stage-1-task",
    status_code: 200,
  };

  res.status(200).json(data);
});

module.exports.router = router;
