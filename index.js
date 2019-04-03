function fetchBooks() {
  fetch("https://anapioficeandfire.com/api/books")
    .then(function(resp){
        return resp.json();   
    })
    .then (function(json){
        console.log(json);
        renderBooks(json);
    });
}

function renderBooks(json) {
  const main = document.querySelector('.main')
  json.forEach(book => {
    const h2 = document.createElement('h5')
    h2.innerHTML = `<h5>${book.name}</h5>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
