const url = 'https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=javascript;'
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
let attemptCounter = false;
inputVal.value ='hello';
btn.textContent = 'Load JSON data';

btn.addEventListener('click', (e)=>{
  fetch(url)
  .then (response => response.json())
  .then ((data) => {
    maker(data.query.search);
  })
})

function maker(data){
  console.log(data);
  output.innerHTML = '<b>Results for </b>';
  data.forEach(element => {
    console.log(element);
    const div = document.createElement('div');
    div.innerHTML += `<h3>${element.title}</h3>`;
    div.classList.add('box');
    div.innerHTML += `${element.snippet}`;
    output.append(div);
  });
}
