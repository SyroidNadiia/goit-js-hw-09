refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  // amount: document.querySelector('input[name="amount"]'),
  btnSubmit: document.querySelector('button[type="submit"]'),
};

refs.delay.addEventListener('input', onEnteredDelay);
refs.step.addEventListener('input', onEnteredStep);
// refs.amound.addEventListener('input', onEnteredAmount);
refs.btnSubmit.addEventListener('submit', onClickBtn);

let position = 0;
let delay = 0;

function onEnteredDelay(event) {
  return event.target.value;
}

function onEnteredStep(event) {
  const valueStep = event.target.value;
  console.log(valueStep);
}

function onEnteredAmount() {}

function onClickBtn(event) {
  event.preventDefault();
  position += 1;
  delay = onEnteredDelay();
  createPromise(position, delay);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise(resolve => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

// 