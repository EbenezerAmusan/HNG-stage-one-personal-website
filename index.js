//set current time in UTC
document.addEventListener("DOMContentLoaded", () => {
  const currentTimeElement = document.getElementById("currentTime");
  const updateTime = () => {
    const now = new Date();
    currentTimeElement.textContent = now.toUTCString();
  };
  updateTime();
  setInterval(updateTime, 1000);

  //set current day of the week
  const currentDayElement = document.getElementById("currentDay");
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  currentDayElement.textContent = days[new Date().getUTCDay()];
});
