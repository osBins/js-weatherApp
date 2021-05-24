let cityName = document.querySelector("#place");
let weather = document.querySelector(".weather");
let temperature = document.querySelector(".temp");
let humidity = document.querySelector(".humidity");
let btn = document.querySelector("#button");
let API = "695aba4ce78f3ca31491bdfb1e9f6b1e";

btn.addEventListener("click", function () {
  // console.log("Clicked");
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName.value +
      "&units=metric&appid=" +
      API
  )
    .then((smth) => smth.json())
    .then((lol) => {
      console.log(lol);
      weather.innerHTML = lol['weather'][0]['main'];
      temperature.innerHTML = Math.floor(lol['main']['temp']) + "°C";
      humidity.innerHTML = lol['main']['humidity'] + "RH";
    });

});

