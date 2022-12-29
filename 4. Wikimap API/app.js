const url = 'https://api.tomtom.com/search/2/reverseGeocode/';
const key = ''; // uso da API da TOM TOM Developers
const btn = document.querySelector('.btn');
const output =  document.querySelector('.output');
const inputVal = document.querySelector('.val');
const inputVal2 = document.createElement('input');
inputVal2.setAttribute('type', 'text');
inputVal2.value = '5.223776'; //long
inputVal.value = '52.157831'; //lat
document.body.prepend(inputVal2);
const h1 = document.querySelector('h1');
document.body.prepend(h1);
btn.textContent = 'Search Map Lon Lat';
btn.addEventListener('click', (e) => {
  let lon = inputVal2.value;
  let lat = inputVal.value;

  let tempURL = `${url}${lat},${lon}.json?${key}`;
  fetch(tempURL).then((response) => response.json())
  .then((data) => {
    console.log(data.addresses);
    output.innerHTML = '';
    //JSON.stringify(data);
    maker(data.addresses)
  })
  .catch((error) => {
    console.log(error);
  })
})

function maker(data){
  data.forEach(element => {
    console.log(element);
    const div = document.createElement('div');
    div.classList.add('box');
    div.innerHTML = `<div>Local: ${element.address.localName
    }<br>Street: ${element.address.freeformAddress}<br>Country: ${element.address.country}</div>`;
    output.append(div);
  });
}
