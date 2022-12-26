const url = 'https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch='
const btn = document.querySelector('.btn');
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
let attemptCounter = false;
inputVal.value ='hello';
btn.textContent = 'Load JSON data';

btn.addEventListener('click', (e)=>{
  let searchTerm = inputVal.value || 'JavaScript';
  let tempURL = url + searchTerm;
  console.log(tempURL);

  fetch(tempURL).then (response => response.json())
  .then ((data) => {
    console.log(data)
    output.innerHTML = '<div><b>Results for </b>' + searchTerm + '</div>';
    output.innerHTML += `Total Results: ${data.query.searchinfo.totalhits}<br>`
    maker(data.query.search);
  })
})

function maker(data){
  console.log(data);
  data.forEach(element => {
    console.log(element);
    const div = document.createElement('div');
    div.innerHTML += `<h3><a href="https://pt.wikipedia.org/wiki?curid=${element.pageid}" target="_blank">${element.title}</a></h3>`;
    div.innerHTML += `<div>Page ID ${element.pageid} | Size ${element.size} | WordCount ${element.wordcount}</div>`;
    div.classList.add('box');
    div.innerHTML += `${element.snippet}`;
    output.append(div);
  });
}
