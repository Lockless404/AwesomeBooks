const titleOutput = document.getElementById('titleOutput');
const authorOutput = document.getElementById('authorOutput');
const addButton = document.getElementById('addButton');
const bookList = document.querySelector('.bookList');

let books = [];

function addBooks() {
  const titleInput = document.getElementById('titleInput').value;
  const authorInput = document.getElementById('authorInput').value;
  const title = titleInput;
  const author = authorInput;
  const n = books.length;
  books[n] = {
    title: title,
    author: author,
  }
};

function removeBook(n) {
  books.splice(n, 1);
  return books;
}

function render() {
  for (let n = 0; n < books.length; n += 1) {
    bookList.innerHTML += `
      </div>
      <p id="titleOutput">${books[n].title}</p>
      <p id="titleOutput">${books[n].author}</p>
      <button class="removeButton">Remove</button>
      <hr>
      </div>
    `;
  }
  const removeButton = document.querySelectorAll('.removeButton');
  for (let i = 0; i < removeButton.length; i += 1) {
    removeButton[i].addEventListener('click', () => {
      bookList.innerHTML = '';
      removeBook(i);
      render();
    });
  }
}

addButton.addEventListener('click', () => {
  bookList.innerHTML = '';
  addBooks();
  render();
});




// const removeButton = document.querySelectorAll('.removeButton');
// for (let i = 0; i < removeButton.length; i += 1) {
//   removeButton[i].addEventListener('click', () => {
//     removeBook(1);
//     render();
//     console.log('cick')
//   });
// }