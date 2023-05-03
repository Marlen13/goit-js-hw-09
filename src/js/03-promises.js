import Notiflix from 'notiflix';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = { position, delay };
      if (shouldResolve) {
        // Fulfill
        resolve(data);
      } else {
        reject(data);
      }
    }, delay);
  });
}
const formPromise = document.querySelector('.form');

formPromise.addEventListener('submit', e => {
  e.preventDefault();
  const delay = formPromise.elements.delay.value;
  console.dir(delay);
  const step = formPromise.elements.step.value;
  console.dir(step);
  const amount = formPromise.elements.amount.value;
  console.dir(amount);
  for (let position = 1; position <= amount; position += 1) {
    const currentDelay = delay + step * (position - 1);
    createPromise(position, currentDelay)
      .then(({ position, delay }) => {
        // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        //     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});
