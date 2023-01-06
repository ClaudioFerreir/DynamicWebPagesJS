

const h1 = document.querySelector('h1');
const inputVal = document.querySelector('.val');
const btn = document.querySelector('.btn');
const url1 = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={APIKEY}}';


//inputVal.value = 'test';
//btn.textContent = 'Click Me';

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
  .catch( (err) => {
    console.log(err);
  })


}
