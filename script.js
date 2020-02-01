//These will be the variables for api ajax calls
const apiKey = "166a433c57516f51dfab1f7edaed8413";
let uvIndexURL = "http://api.openweathermap.org/data/2.5/uvi?APPID=" + apiKey;
let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&APPID=" + apiKey + '&q=';
let weatherURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=" + apiKey + '&q=';

// Set jQuery variables for DOM elements
let dispCurrentCity = $('#current-weather-title');
let dispCurrentTemp = $('#currenttemp');
let dispCurrentHum = $('#currenthum');
let dispCurrentWind = $('#currentwind');
let dispCurrentUV = $('#currentUV');

function weatherAjax(city) {
      $.ajax({
            url: weatherURL + city,
            method: "GET"
      }).then(function (response) {
            console.log(response);
            
            dispCurrentCity.text(`Current Weather | ${response.name}`)
        dispCurrentTemp.text(`Temperature: ${response.main.temp}°F`)
        dispCurrentHum.text(`Humidity: ${response.main.humidity}%`)
        dispCurrentWind.text(`Wind Speed: ${response.wind.speed} MPH`) 
      });
};
// forecast ajax call
$.ajax({
      url: forecastURL + "minneapolis",
      method: "GET"
}).then(function (response) {
      console.log(response);
});

// search button on click WEATHER
$("#search").on('click', function () {
      event.preventDefault();
      let city = $('#cityInput').val();
      weatherAjax(city);
      //forecastAjax(city);

});























/*var searchResult = "test";
document.getElementsByClassName("citySearchInput").value = searchResult;
queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=" + searchResult "&units=imperial&appid=" + APIKey;var*/