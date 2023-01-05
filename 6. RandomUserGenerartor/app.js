const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
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
    const div = eleMaker('div', output, ''); //usamos a mesma function para criar os elementos como a div pai
    div.classList.add('box');
    const temp = `${el.name.title} ${el.name.first} ${el.name.last} <br>
    ${el.email}`;
    const temp1 = `<img src="${el.picture.large}">`
    eleMaker('div', div, temp);
    eleMaker('div', div, temp1);
  })
}

function eleMaker(eleTag, parent, contents) {
  const elem = document.createElement(eleTag);
  parent.append(elem);
  elem.innerHTML = contents;
  return elem;
}
