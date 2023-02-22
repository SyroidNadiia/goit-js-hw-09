const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');

btnStartEl.addEventListener('click', onClickStart);
btnStopEl.addEventListener('click', onClickStop);
onChangeDisabled(false);

let timerID = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickStart(event) {
  timerID = setInterval(onChangeColor, 1000);
  onChangeDisabled(true);
}

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function onClickStop(event) {
  clearInterval(timerID);
  onChangeDisabled(false);
}

function onChangeDisabled(boolean) {
  btnStartEl.disabled = boolean;
  btnStopEl.disabled = !boolean;
}
