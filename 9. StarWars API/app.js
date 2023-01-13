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
    //console.log(data);
    //importante usar esta proposta do for quando queremos usar a chave como texto removendo o simbolo associada ao valor
    for(const prop in data) {
      //console.log(`${prop} : ${data[prop]}`)
      const btn = document.createElement('button');
      btn.classList.add('btnz');
      btn.textContent = prop;
      h1.append(btn);
      btn.urlz = data[prop]; //criamos uma propriedade para o elemento para poder ser acessada depois em uma funcao
      btn.addEventListener('click', getData);
    }
  })
})

btn1.addEventListener('click', (e) => {
  console.log('ready');
})

// funcoes
function getData(e) {
  //console.log(e.target);
  const el = e.target;
  getJSON(el.urlz); //acessamos uma propriedade que criamos acima
}

function getJSON(url) {
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    buildPage(data);
  })
}

function buildPage(data) {
  console.log(data);
  output.innerHTML = '';
  data.results.forEach(element => {
    const div = document.createElement('div');
    div.textContent = element.name;
    output.append(div);
    console.log(element);
  });
}
