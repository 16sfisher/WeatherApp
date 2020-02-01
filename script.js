//These will be the variables for api ajax calls
const apiKey = "166a433c57516f51dfab1f7edaed8413";
let uvIndexURL = "http://api.openweathermap.org/data/2.5/uvi?APPID=" + apiKey;
let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&APPID=" + apiKey + '&q=';
let weatherURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=" + apiKey + '&q=';

$.ajax({
      url: weatherURL + "minneapolis",
      method: "GET"
}).then(function (response) {
      console.log(response);
      // City Name
      console.log(response.name);
      //current temp
      console.log(response.main.temp);
      //current humidity
      console.log(response.main.humidity);
      //current wind speed
      console.log(response.wind.speed);      

});
// forecast ajax call
$.ajax({
      url: forecastURL + "minneapolis",
      method: "GET"
}).then(function (response) {
      console.log(response);
});
// uv index call























/*var searchResult = "test";
document.getElementsByClassName("citySearchInput").value = searchResult;
queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=" + searchResult "&units=imperial&appid=" + APIKey;var*/