const url = 'https://www.discoveryvip.com/shared/test1.json';
const localUrl = 'people.json';

const btn = document.querySelector('.btn');
//console.log(btn);
const output = document.querySelector('.output');
//console.log(output);
const inputVal = document.querySelector('.val');
//console.log(inputVal);
let attemptCounter = false; // estabelece o contador de tentativas de falhas para consumir a API para se por algum motivo perdermos o arquivo local nao vamos continuar tentando fazer as solicitações de fetch

inputVal.style.display = 'none';
btn.textContent = 'Load JSON data';
btn.addEventListener('click', (e) => {
  getData(url);
})

function getData(urlPath){
  fetch(urlPath)
  .then(response => response.json())
  .then((data) => {
    maker(data);
  }).catch(error => {
    if(!attemptCounter){
      getData(localUrl); // importante porque caso encontrarmos erros nos dados carregados na API iremos carregar os dados localmente
    }
    attemptCounter = true; // permite que so facamos so uma tentativa sem que a pagina seja recarregada
    console.log(error);
    console.log(attemptCounter);
  })
}

function maker(data){
  output.innerHTML = '<h1>JSON Data</h1>'
  data.forEach(element => {
    console.log(element);
    // JSON.stringify(element)
    output.innerHTML += `<div>${element.name.first} ${element.name.last}</div>`;
    output.innerHTML += `<div>${element.location.city} ${element.location.country}</div>`;
    output.innerHTML += `<div>${element.age}</div><hr>`;
  });
}
