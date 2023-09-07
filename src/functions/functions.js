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

module.exports = { getCurrentDayOfTheWeek, getCurrentUTCTimeWithWindow };
