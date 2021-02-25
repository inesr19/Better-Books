$(document).ready(function() {
    $("#search-button").on("click", function() {
      var searchValue = $("#search-value").val();
  
      // clear input box
      $("#search-value").val("");
  
      searchBook(searchValue);
    });
  
    $(".history").on("click", "li", function() {
      searchBook($(this).text());
    });
  
    function makeRow(text) {
      var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
      $(".history").append(li);
    }
  
    function searchBook(searchValue) {
      $.ajax({
        type: "GET",
        url: "https://www.googleapis.com/books/v1/volumes?q=" + searchValue + "inauthor:keyes&key=AIzaSyAR-EWCSpmrvXO7U1NX636P7rn1fJWsUJY",
        // https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAR-EWCSpmrvXO7U1NX636P7rn1fJWsUJY
        dataType: "json",
        success: function(data) {
          // create history link for this search
          if (history.indexOf(searchValue) === -1) {
            history.push(searchValue);
            window.localStorage.setItem("history", JSON.stringify(history));
      
            makeRow(searchValue);
          }
          
          // clear any old content
          $("#today").empty();
  
          // create html content for current weather
          var card = $("<div>").addClass("card");
          var title = $("<p>").addClass("card-text").text("Book Title: " + items.volumeInfo.title );
          var subtitle = $("<p>").addClass("card-text").text("Book Title: " + items.volumeInfo.title.subtitle );
          var author = $("<p>").addClass("card-text").text("Author: " + items.volumeInfo.authors);
        //   var humid = $("<p>").addClass("card-text").text("Humidity: " + data.main.humidity + "%");
        //   var temp = $("<p>").addClass("card-text").text("Temperature: " + data.main.temp + " °F");
        //   var cardBody = $("<div>").addClass("card-body");
        //   var img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
  
          // merge and add to page
          // title.append(img);
          cardBody.append(title, subtitle, author);
          card.append(cardBody);
          $("#today").append(card);
  
          // call follow-up api endpoints
          getBook(searchValue);
  
        }
      });
    }
    
    
  
    // get current history, if any
    var history = JSON.parse(window.localStorage.getItem("history")) || [];
  
    if (history.length > 0) {
      searchBook(history[history.length-1]);
    }
  
    for (var i = 0; i < history.length; i++) {
      makeRow(history[i]);
    }
  });
