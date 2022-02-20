const API_KEY = "1545879515889df25c23857021328cf1";
function geoSucess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.getElementById("weather");
      const name = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      weatherContainer.innerText = `${name}, ${weather}, ${temp}°C`;
    });
}

function geoError() {
  alert("We need your location!");
}

navigator.geolocation.getCurrentPosition(geoSucess, geoError);
