const booksDiv = $(".bookInfo");

// mobile side bar for nav
$(document).ready(function(){
  $('.sidenav').sidenav();
});

// $(".history").on("click", "li", function() {
//   searchBook($(this).text());
// });

function makeRow(text) {
  var li = $("<li>")
    .addClass("list-group-item list-group-item-action")
    .text(text);
  $(".history").append(li);
}
function searchBook(searchValue) {
  const apiKey = "AIzaSyAR-EWCSpmrvXO7U1NX636P7rn1fJWsUJY";

  const querylUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&orderBy=relevance&keyes&key=&${apiKey}`;
  console.log(querylUrl);
  $.ajax({
    url: querylUrl,
    method: "GET",
  }).then((response) => {
    console.log(response);

    booksDiv.empty();

    const itemsArray = response.items;
    for (let i = 0; i < itemsArray.length; i++) {
      console.log(itemsArray[i]);

      const item = itemsArray[i].volumeInfo;
      const imgEl = item.imageLinks;
      const titleEl = item.title;
      const authorEl = item.authors;
      const desEl = item.description;
      const catEl = item.categories;
      // const isbn = item.industryIdentifiers[0].identifier;
      const isbn = 123;
      const bookInfoDiv = $('<div class="card-panel">')

      $("<br><br>").appendTo(bookInfoDiv);
      // if their is no image, as placeholder.
      if (imgEl !== undefined) {
        $("<img>", {
          class: "image responsive-img",
          src: item.imageLinks.thumbnail,
        }).appendTo(bookInfoDiv);
      } else {
        $("<img>", {
          class: "image responsive-img",
          src: "http://placehold.it/128x198",
        }).appendTo(bookInfoDiv);
      }

      $("<div>", {
        class: "title",
        text: titleEl,
      }).appendTo(bookInfoDiv);

      $("<div>", {
        class: "author",
        text: `Author: ${authorEl}`,
      }).appendTo(bookInfoDiv);

      $("<div>", {
        class: "description",
        text: `Description: ${desEl}`,
      }).appendTo(bookInfoDiv);

      $("<div>", {
        class: "categories",
        text: `Categories: ${catEl}`,
      }).appendTo(bookInfoDiv);

      $("<div>", {
        class: "isbn",
        text: `isbn: ${isbn}`,
      }).appendTo(bookInfoDiv);

      $("<hr>").appendTo(bookInfoDiv);

      $("<div>", {
        class: "save btn-large",
        text: "save book",
      }).appendTo(bookInfoDiv);
      bookInfoDiv.appendTo(booksDiv)
    }
    console.log("append");
    $(".save.btn-large").on("click", function () {
      console.log("you have click on save book");
      const title = $(this).siblings('.title').text();
      const author = $(this).siblings('.author').text();
      const description = $(this).siblings('.description').text();
      const cover = $(this).siblings('.image').attr('src');
      // const isbn = $(this).siblings('.isbn').text();
      const isbn = 123;

      console.log(title);

      let email = "fake@test.com";
      const data = {
        title,
        author,
        description,
        cover,
        isbn,
        email
      }

      // Fetch database
      fetch(`/api/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
         data
        )
      }).then(response => {
        fetch(`/api/list/${email}`).then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data)
        });

        return response.json();
      })
      .then(data => console.log(data))
      .catch(error => console.log(error))
      
      
    });
  });
}

$(document).ready(function () {
  $(".btn").on("click", function () {
    const search = $("#search-value").val();
    console.log(search);
    // clear input box
    $("#search-value").val("");

    searchBook(search);
  });
});


