const bookInfoDiv = $('.bookInfo');

    // $(".history").on("click", "li", function() {
    //   searchBook($(this).text());
    // });
  
    function makeRow(text) {
      var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
      $(".history").append(li);
    }
    function searchBook(searchValue) {
      const apiKey = 'AIzaSyAR-EWCSpmrvXO7U1NX636P7rn1fJWsUJY'
  
      const querylUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&orderBy=relevance&keyes&key=&${apiKey}`
      console.log(querylUrl);
      $.ajax({
        url: querylUrl,
        method: "GET",
      }).then((response) => {
        console.log(response);

        bookInfoDiv.empty();
      

        $('<img>', {
          class: 'image',
          src: response.items[0].volumeInfo.imageLinks.thumbnail
        }).appendTo(bookInfoDiv)
          
        $('<div>', {
          class: 'title',
          text: response.items[0].volumeInfo.title
        }).appendTo(bookInfoDiv)
          
        $('<div>', {
          class: 'author',
          text: response.items[0].volumeInfo.authors[0]
        }).appendTo(bookInfoDiv)
          
        $('<div>', {
          class: 'description',
          text: response.items[0].volumeInfo.description
        }).appendTo(bookInfoDiv)
        
        $('<div>', {
          class: 'categories',
          text: response.items[0].volumeInfo.categories[0]
        }).appendTo(bookInfoDiv)

        // $(".title").append(response.items[0].volumeInfo.title);
        // $(".author").append(response.items[0].volumeInfo.authors[0]);
        // $(".description").append(response.items[0].volumeInfo.description);
        // $(".categories").append(response.items[0].volumeInfo.categories[0]);
        
      });
      }

      $(document).ready(function() {
        $(".btn").on("click", function() {
          const search = $("#search-value").val();
          console.log(search);
          // clear input box
          $("#search-value").val("");
     
          searchBook(search);
        });
    });
    
    
  
  //   // get current history, if any
  //   var history = JSON.parse(window.localStorage.getItem("history")) || [];
  
  //   if (history.length > 0) {
  //     searchBook(history[history.length-1]);
  //   }
  
  //   for (var i = 0; i < history.length; i++) {
  //     makeRow(history[i]);
  //   }
  // });
