// Seleçao dos elementos e URLs
const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');
const output = document.querySelector('.output');
const inputVal = document.querySelector('.val');
btn.textContent = 'Click Me';
const url1 = 'https://api.chucknorris.io/jokes/';

btn.addEventListener('click', (e) => {
  console.log('ready');
  const val1 = inputVal.value || 'test';
  tempURL = url1 + 'search?query=' + val1;
  getJokes(tempURL, val1);

})

buildCats();

//Funçoes

function buildCats() {
  const urlTemp = url1 + 'categories';
  fetch(urlTemp)
  .then(response => response.json())
  .then((data) => {
    //console.log(data);
    h1.innerHTML = '';
    data.forEach(cat => {
      const btnTemp = document.createElement('button');
      btnTemp.textContent = cat;
      h1.append(btnTemp);
      btnTemp.addEventListener('click', (e) => {
        //https://api.chucknorris.io/jokes/random?category={category}
        //console.log(cat);
        const tempURL = url1 + 'random?category=' + cat;
        //console.log(tempURL);
        fetch(tempURL)
        .then(response => response.json())
        .then((data) => {
          output.innerHTML = 'Category : ' + cat + '<hr>';
          addJoke(data.value);
      })
      })
    })
  })
}

function getJokes(url, searchTerm){
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    output.innerHTML = `${searchTerm} found ${data.total}`
    console.log(data);
    data.result.forEach(joke => {
      console.log(joke.value);
    })
  })
}

function getJoke(url) {
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    output.innerHTML = '';
    addJoke(data.value);
})
}

function addJoke(val) {
  output.innerHTML += val;
}
