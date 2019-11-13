var settings = {
  async: true,
  crossDomain: true,
  url:
    "https://cors-anywhere.herokuapp.com/https://travel-advisory.p.rapidapi.com/api",
  method: "GET",
  headers: {
    "x-rapidapi-host": "travel-advisory.p.rapidapi.com",
    "x-rapidapi-key": "8ad2e98342msh27fc3fc5b062d30p1d80a5jsn25f0073e8a8c"
  }
};

$.ajax(settings).done(function(response) {
  console.log(response);
});


async src="https://cse.google.com/cse.js?cx=001325578064499497546:as7yfkjtdgn"

      // var settings = {
      //   async: true,
      //   crossDomain: true,
      //   url:
      //     "https://cors-anywhere.herokuapp.com/https://travel-advisory.p.rapidapi.com/api",
      //   method: "GET",
      //   headers: {
      //     "x-rapidapi-host": "travel-advisory.p.rapidapi.com",
      //     "x-rapidapi-key": "8ad2e98342msh27fc3fc5b062d30p1d80a5jsn25f0073e8a8c"
      //   }
      // };
      var travelInfo = $(this).attr();
      var queryURL = "https://cors-anywhere.herokuapp.com/https://travel-advisory.p.rapidapi.com/api" + travelInfo + 
      "key=8ad2e98342msh27fc3fc5b062d30p1d80a5jsn25f0073e8a8c";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response){
        var results = response.data;
        for(var i = 0; i < results.length; i++){
          var pushDiv = $("<div>");
          var travelAdv = $("<img>");
          travelAdv = attr("src", results[i].images.fixed_height.url);
          pushDiv.append(travelInfo);
          pushDiv.append(travelAdv);
        }
      });

      // $.ajax(settings).done(function(response) {
      //   console.log(response);
      // });
    
