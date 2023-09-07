function getCurrentUTCTimeWithWindow() {
  const utc_string = new Date().toISOString();

  const string = utc_string.slice(0, 19);

  return `${string}Z`;
}

function getCurrentDayOfTheWeek() {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();

  const currentDayName = daysOfWeek[currentDayOfWeek];

  return currentDayName;
}

module.exports = { getCurrentDayOfTheWeek, getCurrentUTCTimeWithWindow };
