import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  input: document.querySelector('#datetime-picker'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
};

let time = {};

refs.btnStart.addEventListener('click', onClickStart);
refs.input.addEventListener('change', onChangeData);
refs.btnStart.disabled = true;

function onClickStart() {
  refs.btnStart.disabled = true;
  const intervalId = setInterval(() => {
    const dif = calculationDifference();
    if (dif <= 0) {
      return;
    }
    time = convertMs(dif);
    updateTimeFace(time);
  }, 1000);
}

function calculationDifference() {
  const inputDate = new Date(refs.input.value).getTime();
  const currentData = new Date().getTime();
  return inputDate - currentData;
}

function onChangeData() {
  const difference = calculationDifference();
  if (difference <= 0) {
    Notiflix.Notify.failure('Please choose a date in the future');
  } else {
    refs.btnStart.disabled = false;
  }
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

function updateTimeFace({ days, hours, minutes, seconds }) {
  refs.days.textContent = addLeadingZero(days);
  refs.hours.textContent = addLeadingZero(hours);
  refs.minutes.textContent = addLeadingZero(minutes);
  refs.seconds.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
