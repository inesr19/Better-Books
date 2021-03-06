async function renderBooks(){
  const books = await fetch('/api/list/fake@test.com').then(data => data.json());
  console.log('we got books: ', books);
  const html = books.map(book => {
    //<h1 style="color:blue;text-align:center;">This 

    const bookHtml = `
    <div class="card-panel" style="background-color: white">
      <img width=500px height=500px src="${book.cover}"/>
      <h1>${book.title}</h1>
      <h2>${book.author}</h2>
      <p>${book.description}</p>
    </div>
    `
    document.querySelector('.container .books').innerHTML +=(bookHtml);

  })
}

renderBooks();