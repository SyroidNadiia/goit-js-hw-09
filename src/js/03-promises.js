import Notiflix from 'notiflix';

refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  btn: document.querySelector('button[type="submit"]'),
};

refs.form.addEventListener('submit', event => {
  event.preventDefault();
});
refs.delay.addEventListener('input', event => {
  delay = Number(event.target.value);
});
refs.step.addEventListener('input', event => {
  step = Number(event.target.value);
});
refs.amount.addEventListener('input', event => {
  amount = event.target.value;
});
refs.btn.addEventListener('click', onClickBtn);

const formData = {};
let delay = 0;
let step = 0;
let amount = 0;
let position = 0;

function onClickBtn() {
  if (position >= amount) {
    return;
  }
  position += 1;

  const promises = createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

  delay += step;
  onClickBtn();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
