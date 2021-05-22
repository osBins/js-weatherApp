let cityName = document.querySelector('#place');

fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=695aba4ce78f3ca31491bdfb1e9f6b1e')
  .then(response => response.json())
  .then(data => console.log(data))