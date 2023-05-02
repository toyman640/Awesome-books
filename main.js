import Book from './store.js';

const createBook = document.querySelector('#addbook');

class Library {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
  }

  collectBooks(title, author) {
    const book = new Book(title, author);
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBooks();
  }

  removeBook(title, author) {
    this.books = this.books.filter((book) => book.title !== title || book.author !== author);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBooks();
  }

  showBooks() {
    const booksDiv = document.querySelector('#books');
    booksDiv.innerHTML = '';
    const list = document.createElement('div');
    if (Array.isArray(this.books)) {
      this.books.forEach((book) => {
        const item1 = document.createElement('p');
        const item2 = document.createElement('p');
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.classList.add('remove');
        item1.innerText = `${book.title}`;
        item2.innerText = `${book.author}`;
        document.createElement('hr');
        list.appendChild(item1);
        list.appendChild(item2);
        list.appendChild(removeButton);
        list.appendChild(document.createElement('hr'));
        /* eslint-disable */
        removeButton.addEventListener('click', () => {
          this.removeBook(book.title, book.author)
        });
        /* eslint-enable */
      });
    }
    booksDiv.appendChild(list);
  }
}

const newBook = new Library();

createBook.addEventListener('click', (event) => {
  event.preventDefault();
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const title = titleInput.value;
  const author = authorInput.value;
  newBook.collectBooks(title, author);
  titleInput.value = '';
  authorInput.value = '';
});
newBook.showBooks();
