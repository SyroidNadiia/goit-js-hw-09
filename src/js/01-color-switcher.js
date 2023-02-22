const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');

btnStartEl.addEventListener('click', onClickStart);
btnStopEl.addEventListener('click', onClickStop);
btnStartEl.disabled = false;
btnStopEl.disabled = true;

let timerID = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStart(event) {
  timerID = setInterval(onChangeColor, 1000);
  btnStartEl.disabled = true;
  btnStopEl.disabled = false;
}

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function onClickStop(event) {
  clearInterval(timerID);
  btnStartEl.disabled = false;
  btnStopEl.disabled = true;
}
