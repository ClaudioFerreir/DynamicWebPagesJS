// Variaveis e selecao de elementos
const apikey = "";

const apiKeyUnsplash ="";

const cityInput = document.querySelector('#city-input');
const searchBtn = document.querySelector('#search');

const cityElement = document.querySelector('#city');
const tempElement = document.querySelector('#temperature span');
const descElement = document.querySelector('#description');
const weatherIconElement = document.querySelector('#weather-icon');
const countryElement = document.querySelector('#country');
const humidityElement = document.querySelector('#humidity span');
const windElement = document.querySelector('#wind span');

//container que iremos mudar a classe para aparecer na tela
const weatherContainer = document.querySelector('#weather-data');



// Funçoes
//funcao assincrona para obter os dados da API
const getWeatherData = async(city) => {
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  return data;
}

//funcao assincrona para capturar imagem do unsplash
const changeBGimage = async (city) => {
  const apiUnsplashURL = `https://api.unsplash.com//photos/random?client_id=${apiKeyUnsplash}&orientation=landscape&query=${city}`;

  const res = await fetch(apiUnsplashURL);
  const data = await res.json();

  return data.urls.full;
}


//funcao para motrar na tela os dados extraidos
const showWeatherData = async (city) => {

  const data = await getWeatherData(city);

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;

  const bg = await changeBGimage(city);
  document.body.style.backgroundImage = `url("${bg}")`;

  //mostra o quadro com a informação apos a pesquisa
  weatherContainer.classList.remove("hide");
}



//Eventos
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});

//evento que capta a tecla 'enter' para desencadear o evento
cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value;

    showWeatherData(city);
  }
});
