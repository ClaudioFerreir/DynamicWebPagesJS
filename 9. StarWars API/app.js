// Seleçao de elementos e API
const btn1 = document.querySelector('.btn1');
const h1 = document.querySelector('h1');
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
const mainURL = 'http://swapi.dev/api/';

btn1.textContent = 'Click Me';

//Serve para carregar logo que a pagina é aberta juntamente com o DOM
window.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM ready'); // msg sempre que o conteudo do DOM é carregado
  fetch(mainURL)
  .then(response => response.json())
  .then((data) => {
    //limpa um elemento (h1) quando chegar a requisiçao da API
    h1.innerHTML = '';
    console.log(data);
    //importante usar esta proposta do for quando queremos usar a chave como texto removendo o simbolo associada ao valor
    for(const prop in data) {
      console.log(`${prop} : ${data[prop]}`)
      const btn = document.createElement('button');
      btn.classList.add('btnz');
      btn.textContent = `${prop}`;
      h1.append(btn);
      btn.addEventListener('click', getData);
    }
  })
})

btn1.addEventListener('click', (e) => {
  console.log('ready');
})

// funcoes

function getData(e) {
  console.log(e.target);
}
