import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onStartCreate);

let delay = 0;
let step = 0;
let amount = 0;

function onGetInputsData(event) {
  delay = Number(event.target.elements.delay.value);
  step = Number(event.target.elements.step.value);
  amount = Number(event.target.elements.amount.value);
  return { delay, step, amount };
}

function onStartCreate(event) {
  event.preventDefault();
  const { delay, step, amount } = onGetInputsData(event);

  for (let position = 0; position < amount; position += 1) {
    createPromise(position + 1, delay + step * position)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
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
