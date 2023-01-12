// Variaveis e selecao de elementos
const apiKeyWeather = "";
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

const errorMessageContainer = document.querySelector("#error-message");
const loader = document.querySelector("#suggestions button");

const suggestionContainer = document.querySelector("#suggestions");
const suggestionButtons = document.querySelectorAll("#suggestions button");

// Funçoes

//Loader
const toggleLoader = () => {
  loader.classList.toggle("hide");
};

//funcao assincrona para obter os dados da API
const getWeatherData = async(city) => {
  toggleLoader();

  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKeyWeather}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  toggleLoader();

  return data;
};

//funcao assincrona para capturar imagem do unsplash
const changeBGimage = async (city) => {
  const apiUnsplashURL = `https://api.unsplash.com//photos/random?client_id=${apiKeyUnsplash}&orientation=landscape&query=${city}`;

  const res = await fetch(apiUnsplashURL);
  const data = await res.json();

  return data.urls.full;
};

//Tratamento de erro
const showErrorMessage = () => {
  errorMessageContainer.classList.remove("hide");
};

const hideInformation = () => {
  errorMessageContainer.classList.add("hide");
  weatherContainer.classList.add("hide");

  suggestionContainer.classList.add("hide");
};

//funcao para motrar na tela os dados extraidos
const showWeatherData = async (city) => {
  hideInformation();

  const data = await getWeatherData(city);

  //Messagem de erro personalizada
  if (data.cod === "404") {
    showErrorMessage();
    return;
  }

  //Dados a serem informados vindos da API
  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed}km/h`;

  //Muda a imagem de fundo
  const bg = await changeBGimage(city);
  document.body.style.backgroundImage = `url("${bg}")`;

  //Mostra o quadro com a informação apos a pesquisa
  weatherContainer.classList.remove("hide");
}

//Eventos
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);
});

//Evento que capta a tecla 'enter' para desencadear o evento
cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value;

    showWeatherData(city);
  }
});

//Sugestões
suggestionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const city = btn.getAttribute("id");

    showWeatherData(city);
  });
});
