const addButton = document.getElementById('addButton');
const bookList = document.querySelector('.bookList');



class Book {
  constructor (title, author) {
    this.title = title;
    this.author = author;
  }


}

let books = [];

class Books {
  
  static addBooks() {
    const titleInput = document.getElementById('titleInput').value;
    const authorInput = document.getElementById('authorInput').value;
    this.books.push(new Book (titleInput, authorInput));
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  static removeBook(n) {
    this.books.splice(n, 1);
    if (this.books.length === 0) {
      localStorage.clear();
    } else {
      localStorage.setItem('books', JSON.stringify(books));
    }
    return this.books;
  }
  
  static render() {
    for (let n = 0; n < this.books.length; n += 1) {
      bookList.innerHTML += `
        </div>
        <p id="titleOutput">${this.books[n].title}</p>
        <p id="titleOutput">${this.books[n].author}</p>
        <button class="removeButton">Remove</button>
        <hr>
        </div>
      `;
    }
  }

}



// function addBooks() {
//   const titleInput = document.getElementById('titleInput').value;
//   const authorInput = document.getElementById('authorInput').value;
//   const n = Books.length;
//   Books[n] = {
//     title: titleInput,
//     author: authorInput,
//   };
  
// }

// function removeBook(n) {
//   Books.splice(n, 1);
//   if (Books.length === 0) {
//     localStorage.clear();
//   } else {
//     localStorage.setItem('Books', JSON.stringify(books));
//   }
//   return Books;
// }

// function render() {
//   for (let n = 0; n < Books.length; n += 1) {
//     bookList.innerHTML += `
//       </div>
//       <p id="titleOutput">${Books[n].title}</p>
//       <p id="titleOutput">${Books[n].author}</p>
//       <button class="removeButton">Remove</button>
//       <hr>
//       </div>
//     `;
//   }
  const removeButton = document.querySelectorAll('.removeButton');
  for (let i = 0; i < removeButton.length; i += 1) {
    removeButton[i].addEventListener('click', () => {
      bookList.innerHTML = '';
      Books.removeBook(i);
      Books.render();
    });
  }
// }

addButton.addEventListener('click', (event) => {
  if (titleInput && authorInput) {
    event.preventDefault();
    bookList.innerHTML = '';
    Books.addBooks();
    Books.render();
  }
});

window.addEventListener('load', () => {
  if (localStorage.getItem('books') === null) {
    Books.render();
  } else {
    books = JSON.parse(localStorage.getItem('books'));
    Books.render();
  }
});
