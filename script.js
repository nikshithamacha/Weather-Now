function checkWeather() {
  const city = document.getElementById('inp').value.trim();
  document.getElementById('inp').value = '';

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  fetch(`https://api.weatherapi.com/v1/current.json?key=7a95e4c018794f55a5642646253010&q=${city}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("city").innerHTML = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
      document.getElementById("image").src = "https:" + data.current.condition.icon;
      document.getElementById("temp").innerHTML = `🌡️ Temperature: ${data.current.temp_c} °C`;
      document.getElementById("wind").innerHTML = `💨 Wind Speed: ${data.current.wind_kph} km/hr`;
      document.getElementById("humidity").innerHTML = `💧 Humidity: ${data.current.humidity}%`;
      document.getElementById("condition").innerHTML = `${data.current.condition.text}`;
      document.getElementById("result").classList.remove("hidden");
    })
    .catch(() => {
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("city").innerHTML = "❌ City not found!";
  document.getElementById("temp").innerHTML = "";
  document.getElementById("wind").innerHTML = "";
  document.getElementById("image").src = "";
});
}