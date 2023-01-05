const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');
h1.style.width = '80%';
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
//.https://cors-anywhere.herokuapp.com/ // opcao local para caso as requisições tenham excedido a permissao da API
const url = 'https://randomuser.me/api/';
inputVal.value = '10';
inputVal.setAttribute('type', 'number');
btn.textContent = 'Click Me';
btn.addEventListener('click', (e) => {
  console.log('ready');
  let val = `?results=${inputVal.value}`;
  adder(url + val);
})

function adder(url) {
  //console.log(url);
  fetch(url)
  .then((response) => {return response.json()})
  .then((data) => {
    //console.log(data);
    output.innerHTML = `<h3>Seed : ${data.info.seed}
    <br>Results : ${data.info.results}</h3>`;
    maker(data.results);
  })
}

function maker(data){
  //console.log(data);
  data.forEach( el => {
    console.log(el);
    const loc = el.location;
    const div = eleMaker('div', output, ''); //usamos a mesma function para criar os elementos como a div pai
    div.classList.add('box');

    const temp = `${el.name.title} ${el.name.first} ${el.name.last} <br>${el.email}<br>Age: ${el.dob.age}`;
    const temp1 = `<img src="${el.picture.large}">`
    const temp2 = `${loc.city} - ${loc.state} <br> ${loc.country}`;

    div.addEventListener('click', (e) => {
      h1.innerHTML = temp + '<div>' + temp1 + '</div>';
      window.scrollTo({top:0}); // assim ao clickar no objeto a tela é direcionada para o top da pagina
    })

    eleMaker('div', div, temp);
    eleMaker('div', div, temp1);
    eleMaker('div', div, temp2);
  })
}

function eleMaker(eleTag, parent, contents) {
  const elem = document.createElement(eleTag);
  parent.append(elem);
  elem.innerHTML = contents;
  return elem;
}
