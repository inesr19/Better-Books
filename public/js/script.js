

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
      const apiKey = 'AIzaSyAR-EWCSpmrvXO7U1NX636P7rn1fJWsUJY'
      const querylUrl = `https://www.googleapis.com/books/v1/volumes?q=intitle'${searchValue}:keyes&key=${apiKey}`
      $.ajax({
        url: querylUrl,
        method: "GET",
      }).then((response) => {
        console.log(response);
        // only pulls 1st in array
        $(".title").append(response.items[1].volumeInfo.title);
        $(".author").append(response.items[1].volumeInfo.authors[0]);
        $(".description").append(response.items[1].volumeInfo.description);
        $(".categories").append(response.items[1].volumeInfo.categories[0]);
        
      })
        
       
  
        }
      });
    // }
    
    
  
  //   // get current history, if any
  //   var history = JSON.parse(window.localStorage.getItem("history")) || [];
  
  //   if (history.length > 0) {
  //     searchBook(history[history.length-1]);
  //   }
  
  //   for (var i = 0; i < history.length; i++) {
  //     makeRow(history[i]);
  //   }
  // });
