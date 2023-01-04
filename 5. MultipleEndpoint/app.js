const btn = document.querySelector('.btn');
urls = [{
  'url': 'https://www.discoveryvip.com/shared/books2.json',
  'arr': 'books',
  'title': 'Books List'
},
{
  'url': 'https://www.discoveryvip.com/shared/1people.json',
  'arr': 'data',
  'title': 'Friends List'
},
{
  'url': 'https://www.discoveryvip.com/shared/coin.json',
  'arr': 'data',
  'title': 'BitCoin Currency'
}];
const h1 = document.querySelector('h1');
h1.innerHTML = '';
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
inputVal.value = 'test';
btn.textContent = 'Click Me';
btn.addEventListener ('click', (e) => {
  //console.log('ready');
  const temp = urls[2];
  //console.log(temp);
  myURL(urls[0]);
})

urls.forEach((element) => {
  const btn1 = document.createElement('button');
  btn1.classList.add('btn', 'btn-success');
  h1.append(btn1);
  btn1.textContent = element.title;
  btn1.addEventListener('click', (event) => {
    //console.log(element);
    myURL(element);
  })
})

function myURL(myObj) {
  let url = myObj.url;
  fetch(url)
  .then ( response => response.text())
  .then ((data) => {
    const json = JSON.parse(data);
    //console.log(url);
    output.innerHTML = url + '<br>';
    maker(json[myObj.arr]);
    //console.log(json);
    //console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
}

function maker(arr){
  console.log(arr.length);
  arr.forEach(element => {
    //console.log(element);
    const div = document.createElement('div');
    div.classList.add('box');
    output.append(div);
    const entries = Object.entries(element); //converte as entradas em uma array onde cada elemento é composto de posicao 0 chave e posicao 1 valor
    //console.log(entries);
    div.innerHTML = 'Properties : ' + entries.length + '<br>';
    for(const obj of entries){
      console.log(obj); //acessa a chave e o valor associado a cada elemento da entrada
      div.innerHTML += `<br>${obj[0]} : ${obj[1]}`;
    }
  });
}
