import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    input: document.querySelector('#datetime-picker'),
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
}

let timer = null;
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      refs.startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.startBtn.disabled = false;

      refs.startBtn.addEventListener('click', countdownTime);

      function countdownTime() {
        timer = setInterval(() => {
          refs.startBtn.disabled = true;

          const inputMS = new Date(refs.input.value).getTime();
          const now = new Date().getTime();
          const timeLeft = inputMS - now;

          const { days, hours, minutes, seconds } = convertMs(timeLeft);

          refs.dataDays.innerHTML = days < 10 ? pad(days) : days;
          refs.dataHours.innerHTML = hours < 10 ? pad(hours) : hours;
          refs.dataMinutes.innerHTML = minutes < 10 ? pad(minutes) : minutes;
          refs.dataSeconds.innerHTML = seconds < 10 ? pad(seconds) : seconds;

          if (timeLeft <= 0) {
            clearInterval(timer);
            refs.startBtn.disabled = false;
            refs.dataDays.innerHTML = '00';
            refs.dataHours.innerHTML = '00';
            refs.dataMinutes.innerHTML = '00';
            refs.dataSeconds.innerHTML = '00';
          }
        }, 1000);
      }

      function pad(value) {
        return String(value).padStart(2, '0');
      }
      
      function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);

        return { days, hours, minutes, seconds };
      }
    }
  },
};

flatpickr(refs.input, options);

