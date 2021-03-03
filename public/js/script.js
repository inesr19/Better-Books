const bookInfoDiv = $(".bookInfo");

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

    bookInfoDiv.empty();

    const itemsArray = response.items;
    for (let i = 0; i < itemsArray.length; i++) {
      const item = itemsArray[i].volumeInfo;
      const imgEl = item.imageLinks;
      const titleEl = item.title;
      const authorEl = item.authors;
      const desEl = item.description;
      const catEl = item.categories;

      $("<br><br>").appendTo(bookInfoDiv);
      // if their is no image, as placeholder.
      if (imgEl !== undefined) {
        $("<img>", {
          class: "image",
          src: item.imageLinks.thumbnail,
        }).appendTo(bookInfoDiv);
      } else {
        $("<img>", {
          class: "image",
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

      $("<hr>").appendTo(bookInfoDiv);

      $("<div>", {
        class: "save btn-large",
        text: "save book",
      }).appendTo(bookInfoDiv);

    }
    console.log("append");
    $(".save.btn-large").on("click", function () {
      console.log("you have click on save book");
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


