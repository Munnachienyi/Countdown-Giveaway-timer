const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday ",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".countdown_container");
const items = document.querySelectorAll(".time_block h4");

let realDate = new Date();
let realYear = realDate.getFullYear();
let realMonth = realDate.getMonth();
let realDay = realDate.getDate();

// let futureDate = new Date(2022 ,8, 20, 14, 39, 00);
const futureDate = new Date(realYear, realMonth, realDay + 10, 18, 30, 0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const date = futureDate.getDate();

let month = futureDate.getMonth();
month = months[month];

let days = weekdays[futureDate.getDay()];

giveaway.textContent = `Giveaway ends on ${days}, ${date}th ${month} ${year}.  ${hours}:${minutes}pm`;

// future time in millsecs
const futureTime = futureDate.getTime();

function getRemainingTime() {
  let todayTime = new Date().getTime();
  const time = futureTime - todayTime;
  //  1s = 1000ms
  //  1min = 60s
  //  1hour= 60min
  //  1day = 24hrs

  // calculating the remaining time in m/secs
  const oneDay = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const oneminute = 60 * 1000;

  // calculate the values
  let days = time / oneDay;
  days = Math.floor(days);
  let hours = (time % oneDay) / onehour;
  hours = Math.floor(hours);
  let minutes = (time % onehour) / oneminute;
  minutes = Math.floor(minutes);
  let seconds = (time % oneminute) / 1000;
  seconds = Math.floor(seconds);

  function format(items) {
    if (items < 10) {
      return (items = `0${items}`);
    }
    return items;
  }

  // set values array
  let values = [days, hours, minutes, seconds];

  items.forEach(function (item, index) {
    item.textContent = format(values[index]);
  });
  if (time < 0) {
    clearInterval(countdown);
    countdown_container.innerHTML = `<h4 class="expire">Sorry,This Giveaway Has Expired</h4> `;
  }
}
// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
