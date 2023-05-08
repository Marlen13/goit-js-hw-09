import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = { position, delay };
      if (shouldResolve) {
        // Fulfill
        res(data);
      } else {
        rej(data);
      }
    }, delay);
  });
}
const formPromise = document.querySelector('.form');

formPromise.addEventListener('submit', e => {
  e.preventDefault();
  const delay = parseInt(formPromise.elements.delay.value);
  console.dir(delay);
  const step = parseInt(formPromise.elements.step.value);
  console.dir(step);
  const amount = parseInt(formPromise.elements.amount.value);
  console.dir(amount);
  for (let position = 1; position <= amount; position += 1) {
    const currentDelay = delay + step * (position - 1);
    createPromise(position, currentDelay)
      .then(({ position, currentDelay }) => {
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${currentDelay}ms`
        );
      })
      .catch(({ position, currentDelay }) => {
        //     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${currentDelay}ms`
        );
      });
  }
});
