Temperature = document.getElementById("Temperature-disply");
cityname = document.getElementById("cityname");
wetherinput = document.getElementById("weather_input");
weatherget = document.getElementById("getWeather");

weatherget.addEventListener("click", function () {
  let city = wetherinput.value;
  let url = `http://api.weatherapi.com/v1/current.json?key=&q=London&aqi=no`;
  fetch(url);
});
