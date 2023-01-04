const btn = document.querySelector('.btn');
urls = [{
  'url': 'https://www.discoveryvip.com/shared/books2.json',
  'arr': 'books'
}];
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
inputVal.value = 'test';
btn.textContent = 'Click Me';
btn.addEventListener ('click', (e) => {
  console.log('ready');
  const temp = urls[0];
  console.log(temp);
})

function myURL(url) {
  fetch(url)
  .then ( response => response.text())
  .then ((data) => {
    const json = JSON.parse(data);
    console.log(json);
    console.log(data);
  })
}
