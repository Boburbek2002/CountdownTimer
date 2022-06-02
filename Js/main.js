window.addEventListener("DOMContentLoaded", () => {
  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  const newYears = `1 Jan ${new Date().getFullYear() + 1}`;

  function countDown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minuts = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minuts);
    secondsEl.innerHTML = formatTime(seconds);
  }
  countDown();

  setInterval(countDown, 1000);

  function formatTime(element) {
    return element >= 10 ? element : `0${element}`;
  }

});
