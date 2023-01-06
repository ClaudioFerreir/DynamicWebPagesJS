const h1 = document.querySelector('h1');
const inputVal = document.querySelector('.val');
const btn = document.querySelector('.btn');
const url1 = 'https://samples.openweathermap.org/';
const url2 = 'https://cors-anywhere.herokuapp.com/';

inputVal.value = 'test';
btn.textContent = 'Click Me';

btn.addEventListener('click', (e) => {
  console.log('ready');
  getValues(url1);
})

function getValues(url) {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
}
