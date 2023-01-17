// Seleçao de elementos e API
const btn1 = document.querySelector('.btn1');
const h1 = document.querySelector('h1');
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
inputVal.style.display = 'none';
btn1.style.display = 'none';
const mainURL = 'http://swapi.dev/api/';
let endPoint = '';
let endTitle = '';

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
  //console.log(e.target.innerHTML);
  endTitle = e.target.innerHTML //captura do titulo de secao da API
  console.log(endTitle);

  const el = e.target;
  getJSON(el.urlz); //acessamos uma propriedade que criamos acima
}

function getJSON(url) {
  endPoint = url; //pegar o endPoint para situar a pagina atual com a query page
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    //console.log(data);
    buildPage(data);
  })
}

function buildPage(data) {
  console.log(data);
  output.innerHTML = `<h1 class="myTitle">${endTitle}</h1><small>${endPoint}</small>`;
  data.results.forEach(element => {
    const div = document.createElement('div');
    div.textContent = element.name || element.title;
    div.classList.add('box');
    output.append(div);
    //console.log(element);
    div.urlz = element.url; //cria uma propriedade interna atrelada ao elemento para ao clicar na div podermos acessa-lo ao chamar a function showItem.

    div.addEventListener('click', showItem);
  });
  const pages = document.createElement('div');
  pages.classList.add('pages'); //customizacao do botao das paginas
  output.append(pages);

  //adicionar acesso a novas paginas no app
  if(data.previous){
    //pode repetir o btn2 nestes casos pq estao protegidos dentro de um mesmo escopo
    const btn2 = document.createElement('button');
    btn2.textContent = 'Previous';
    pages.append(btn2);
    btn2.urlz = data.previous; //vai pegar o valor de data.previous
    btn2.addEventListener('click', (e) => {
      //console.log(data.previous);
      getJSON(data.previous);
    });
  }

  //criacao de numero das paginas ja que sabemos que cada pagina possui 10 itens e o atributo count tem o total de resultados
  const total = Math.ceil(data.count / 10);
  for(let i=0;i<total;i++){
    const btn2 = document.createElement('button');
    btn2.textContent = i+1;
    pages.append(btn2);

    let cleanURL = endPoint.split('?');
    //console.log(cleanURL);
    let tempURL = cleanURL[0] + '?page=' + (i+1);
    btn2.urlz = tempURL; //vai pegar o valor da url

    btn2.addEventListener('click', (e) => {
      console.log(tempURL);
      getJSON(tempURL);
    });
  }

  //adicionar acesso a novas paginas no app
  if(data.next){
    const btn2 = document.createElement('button');
    btn2.textContent = 'Next';
    pages.append(btn2);
    btn2.urlz = data.next; //vai pegar o valor de data.next
    btn2.addEventListener('click', (e) => {
      //console.log(data.next);
      getJSON(data.next);
    });
  }
}

function showItem(e) {
  const el = e.target;
  //console.log(el.urlz);
  output.innerHTML = '';
  fetch(el.urlz)
  .then((response) => response.json())
  .then((data) => {
    //console.log(data);
    for(const prop in data) {
      //console.log(`${prop} : ${data[prop]}`);
      //console.log(typeof(data[prop])); //ver o tipo de objetos retornados e como neste casos temos so strings
      let html = (typeof(data[prop])==='string') ? data[prop] : JSON.stringify(data[prop]); // fazemos desta forma pq a informação como objeto nao vem de uma forma ordenada para ser apresentada

      let propTemp = prop.replace('_',' ');//tratamento do dado do json para remover o underscore da frase

      output.innerHTML += `<div><span class='bigText'>${propTemp}</span> : ${html}</div>`;

    }
  })
  .catch((err) => {
    console.log(err);
    output.innerHTML = 'ERROR';
  })
}
