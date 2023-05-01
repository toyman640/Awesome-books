let books = JSON.parse(localStorage.getItem('books')) || [];
const createBook = document.querySelector('#addbook');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

function showBooks() {
  const booksDiv = document.querySelector('#books');
  booksDiv.innerHTML = '';
  const list = document.createElement('div');
  for (let i = 0; i < books.length; i += 1) {
    const singleBook = books[i];
    const item1 = document.createElement('p');
    const item2 = document.createElement('p');
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.classList.add('remove');
    item1.innerText = `${singleBook.title}`;
    item2.innerText = `${singleBook.author}`;
    document.createElement('hr');
    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(removeButton);
    list.appendChild(document.createElement('hr'));
    /* eslint-disable */
    removeButton.addEventListener('click', () => {
      removeBook(i);
    });
    /* eslint-enable */
  }
  booksDiv.appendChild(list);
}

function collectBooks(title, author) {
  const book = { title, author };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  showBooks();
}

function removeBook(index) {
  books = books.filter((book, i) => i !== index);
  localStorage.setItem('books', JSON.stringify(books));
  showBooks();
}

createBook.addEventListener('click', (event) => {
  event.preventDefault();
  collectBooks(title.value, author.value);
  title.value = '';
  author.value = '';
});
showBooks();
