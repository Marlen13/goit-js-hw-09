import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const currentDate = Date.now();
    const chooseDate = selectedDates[0].getTime();
    if (chooseDate - currentDate <= 0) {
      window.alert('Please choose a date in the future');
    }
    btnStart.disabled = false;
  },
};
const datePicker = flatpickr(input, options);
console.log(datePicker.selectedDates[0].getTime());

btnStart.addEventListener('click', countTimer);
function countTimer() {
  let idCountTimer = null;
  idCountTimer = setInterval(() => {
    const currentDate = Date.now();
    let change = convertMs(datePicker.selectedDates[0].getTime() - currentDate);
    days.textContent = change.days.toString().padStart(2, '0');
    hours.textContent = change.hours.toString().padStart(2, '0');
    minutes.textContent = change.minutes.toString().padStart(2, '0');
    seconds.textContent = change.seconds.toString().padStart(2, '0');
    if (datePicker.selectedDates[0].getTime() - currentDate < 1000) {
      clearInterval(idCountTimer);
    }
  }, 1000);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
