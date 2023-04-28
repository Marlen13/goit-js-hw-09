const body = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const delay = 1000;
let intervalId = null;

btnStart.addEventListener('click', onClick);
function onClick() {
  btnStart.disabled = true;
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, delay);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStop.addEventListener('click', stopClick);

function stopClick() {
  btnStart.disabled = false;
  clearInterval(intervalId);
}
