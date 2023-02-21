import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button[type="submit"]'),
};

refs.form.addEventListener('submit', onSubmitForm);
refs.btn.addEventListener('click', onClickBtn);

let delay = 0;
let step = 0;
let amount = 0;
let position = 0;

function onSubmitForm(event) {
  event.preventDefault();
  delay = Number(event.target.elements.delay.value);
  step = Number(event.target.elements.step.value);
  amount = event.target.elements.amount.value;
}

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
