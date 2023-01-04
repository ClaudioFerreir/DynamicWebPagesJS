const btn = document.querySelector('.btn');
urls = [{
  'url': 'https://www.discoveryvip.com/shared/books2.json',
  'arr': 'books',
  'Title': 'Books List'
},
{
  'url': 'https://www.discoveryvip.com/shared/1people.json',
  'arr': 'data',
  'Title': 'Friends List'
},
{
  'url': 'https://www.discoveryvip.com/shared/coin.json',
  'arr': 'data',
  'Title': 'BitCoin Currency'
}];
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
inputVal.value = 'test';
btn.textContent = 'Click Me';
btn.addEventListener ('click', (e) => {
  //console.log('ready');
  const temp = urls[2];
  //console.log(temp);
  myURL(urls[2]);
})

function myURL(myObj) {
  let url = myObj.url;
  fetch(url)
  .then ( response => response.text())
  .then ((data) => {
    const json = JSON.parse(data);
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
  output.innerHTML = ''; //limpa o nosso HTML a cada nova busca nao sobrepondo resultados
  arr.forEach(element => {
    //console.log(element);
    const div = document.createElement('div');
    output.append(div);
    const entries = Object.entries(element); //converte as entradas em uma array para que possamos percorre-la
    //console.log(entries);
    div.innerHTML = 'Properties : ' + entries.length;
    for(const obj of entries){
      console.log(obj); //acessa o valor associado a cada elemento da entrada
      div.innerHTML += `<br>${obj[0]} : ${obj[1]}
      <br>`;
    }
  });
}
