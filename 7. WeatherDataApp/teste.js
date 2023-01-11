const apiKeyUnsplash ="66LHfe09o09py9RsokcNjeRzOfnzMVKn9WrGZcTlG98";
/* const city = "são paulo"; */

/* const apiUnsplashURL = `https://api.unsplash.com//photos/random?client_id=${apiKeyUnsplash}&orientation=landscape&query=${city}`; */

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

/* function changeBGimage(url) {
  console.log(url);
  fetch(url)
  .then((response) => {return response.json()})
  .then((data) => {
    console.log(data.urls.full);
  })
}
 */

//funcao assincrona para capturar imagem do unsplash
const changeBGimage = async (city) => {
  const apiUnsplashURL = `https://api.unsplash.com//photos/random?client_id=${apiKeyUnsplash}&orientation=landscape&query=${city}`;

  const res = await fetch(apiUnsplashURL);
  const data = await res.json();

  console.log(data.urls.full);
}

//Eventos
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value;

  changeBGimage(city);
});
