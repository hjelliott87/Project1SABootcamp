$("#AFG").on("click", function(){
var queryURL = "https://www.travel-advisory.info/api?countrycode=AF";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  var results = response.data;
   for(var i = 0; i < results.length; i++){
      var pushDiv = $("<div>");
      var travelAdv = $("<img>");
      travelAdv = attr("src", results[i].images.fixed_height.url);
      pushDiv.append(travelAdv);
      $("#info").append(pushDiv);
    }
    console.log(response);
  });
});

$("#CAF").on("click", function() {
var queryURL2 = "https://www.travel-advisory.info/api?countrycode=CF";

$.ajax({
  url: queryURL2,
  method: "GET"
}).then(function(response) {
  var results = response.data;
   for(var i = 0; i < results.length; i++){
      var pushDiv = $("<div>");
      var travelAdv = $("<img>");
      travelAdv = attr("src", results[i].images.fixed_height.url);
      pushDiv.append(travelAdv);
      $("#info").append(pushDiv);
    }
    console.log(response);
  });
});

$("#SSD").on("click", function() {
var queryURL3 = "https://www.travel-advisory.info/api?countrycode=SS";

$.ajax({
  url: queryURL3,
  method: "GET"
}).then(function(response) {
  var results = response.data;
   for(var i = 0; i < results.length; i++){
      var pushDiv = $("<div>");
      var travelAdv = $("<img>");
      travelAdv = attr("src", results[i].images.fixed_height.url);
      pushDiv.append(travelAdv);
      $("#info").append(pushDiv);
    }
    console.log(response);
  });
});

$("#YEM").on("click", function() {
var queryURL4 = "https://www.travel-advisory.info/api?countrycode=YE";

$.ajax({
  url: queryURL4,
  method: "GET"
}).then(function(response) {
  var results = response.data;
   for(var i = 0; i < results.length; i++){
      var pushDiv = $("<div>");
      var travelAdv = $("<img>");
      travelAdv = attr("src", results[i].images.fixed_height.url);
      pushDiv.append(travelAdv);
      $("#info").append(pushDiv);
    }
    console.log(response);
  });
});

$("#SOM").on("click", function() {
var queryURL5 = "https://www.travel-advisory.info/api?countrycode=SO";

$.ajax({
  url: queryURL5,
  method: "GET"
}).then(function(response) {
  var results = response.data;
   for(var i = 0; i < results.length; i++){
      var pushDiv = $("<div>");
      var travelAdv = $("<img>");
      travelAdv = attr("src", results[i].images.fixed_height.url);
      pushDiv.append(travelAdv);
      $("#info").append(pushDiv);
    }
    console.log(response);
  });
});

$("#IRE").on("click", function() {
var queryURL6 = "https://www.travel-advisory.info/api?countrycode=IE";

$.ajax({
  url: queryURL6,
  method: "GET"
}).then(function(response) {
  var results = response.data;
   for(var i = 0; i < results.length; i++){
      var pushDiv = $("<div>");
      var travelAdv = $("<img>");
      travelAdv = attr("src", results[i].images.fixed_height.url);
      pushDiv.append(travelAdv);
      $("#info").append(pushDiv);
    }
    console.log(response);
  });
});

$("#AUS").on("click", function(){
var queryURL7 = "https://www.travel-advisory.info/api?countrycode=AU";

$.ajax({
  url: queryURL7,
  method: "GET"
}).then(function(response) {
  var results = response.data;
   for(var i = 0; i < results.length; i++){
      var pushDiv = $("<div>");
      var travelAdv = $("<img>");
      travelAdv = attr("src", results[i].images.fixed_height.url);
      pushDiv.append(travelAdv);
      $("#info").append(pushDiv);
    }
    console.log(response);
  });
});

$("#ISL").on("click", function(){
var queryURL8 = "https://www.travel-advisory.info/api?countrycode=IS";

$.ajax({
  url: queryURL8,
  method: "GET"
}).then(function(response) {
  var results = response.data;
   for(var i = 0; i < results.length; i++){
      var pushDiv = $("<div>");
      var travelAdv = $("<img>");
      travelAdv = attr("src", results[i].images.fixed_height.url);
      pushDiv.append(travelAdv);
      $("#info").append(pushDiv);
    }
    console.log(response);
  });
});

$("#SUI").on("click", function() {
var queryURL9 = "https://www.travel-advisory.info/api?countrycode=CH";

$.ajax({
  url: queryURL9,
  method: "GET"
}).then(function(response) {
  var results = response.data;
   for(var i = 0; i < results.length; i++){
      var pushDiv = $("<div>");
      var travelAdv = $("<img>");
      travelAdv = attr("src", results[i].images.fixed_height.url);
      pushDiv.append(travelAdv);
      $("#info").append(pushDiv);
    }
    console.log(response);
  });
});

$("#FIN").on("click", function(){
var queryURL10 = "https://www.travel-advisory.info/api?countrycode=FI";

$.ajax({
  url: queryURL10,
  method: "GET"
}).then(function(response) {
  var results = response.data;
   for(var i = 0; i < results.length; i++){
      var pushDiv = $("<div>");
      var travelAdv = $("<img>");
      travelAdv = attr("src", results[i].images.fixed_height.url);
      pushDiv.append(travelAdv);
      $("#info").append(pushDiv);
    }
    console.log(response);
  });
});