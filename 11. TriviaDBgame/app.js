const btn1 = document.querySelector('.btn');
const h1 = document.querySelector('.h1');
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
const baseURL = 'https://opentdb.com/api.php?';

window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM ready'); // msg sempre que o conteudo do DOM é carregado
  btn1.textContent = 'Start Game';
  inputVal.setAttribute('type', 'number');
  inputVal.value = 10;
})

btn1.addEventListener('click', (e) => {
  console.log('ready');
  let tempURL = baseURL + 'amount=' + inputVal.value;
  console.log(tempURL);
  popPage(tempURL); // funcao para popular a pagina
})

function popPage (url) {
  fetch(url)
    .then (response => response.json())
    .then (data => {
      console.log(data.results);
    })
}


