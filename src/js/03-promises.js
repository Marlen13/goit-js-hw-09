import Notiflix from 'notiflix';

const formPromise = document.querySelector('.form');
formPromise.addEventListener('submit', createPromise);
console.log(formPromise.event.target.elements.name[amount]);
// if (formPromise.nextElementSibling.name[amount])
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
