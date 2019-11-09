
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
    