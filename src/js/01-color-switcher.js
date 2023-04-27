const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const delay = 1000;
let intervalId = null;

// btnStart.addEventListener("click", onClick);
btnStop.addEventListener('click', stopClick);
function getRandomHexColor() {
  console.dir(
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`
  );
}
// function onclick() {
//   intervalId = setInterval(() => {
//     function getRandomHexColor();
//     btnStart.classList.add("disable");
//     console.dir(`start not active`);
//   }, delay);
// }

function stopClick() {
  btnStart.classList.remove('disable');
  clearInterval(intervalId);
  console.dir(`stop color`);
}
