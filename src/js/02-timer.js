import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    const currentDate = Date.now();
    const chooseDate = selectedDates[0].getTime();

    console.log(currentDate);

    if (chooseDate <= currentDate) {
      btnStart.disabled = true;

      window.alert('Please choose a date in the future');
    }
    btnStart.disabled = false;
    btnStart.addEventListener('click', countTimer);
    let idCountTimer = setInterval(countTimer, 1000);
    function countTimer() {
      const currentDate = Date.now();

      const chooseDate = selectedDates[0].getTime();

      let counter = chooseDate - currentDate;

      let change = convertMs(counter);

      if (counter < 0) {
        clearInterval(idCountTimer);
      }
      days.textContent = change.days.toString().padStart(2, '0');
      hours.textContent = change.hours.toString().padStart(2, '0');
      minutes.textContent = change.minutes.toString().padStart(2, '0');
      seconds.textContent = change.seconds.toString().padStart(2, '0');
    }
  },
};
flatpickr(input, options);

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
