const btn = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

btn.addEventListener('click', onClick);
function onClick() {
  const currentDate = new Date();
  console.log(currentDate.toLocaleString());
}
