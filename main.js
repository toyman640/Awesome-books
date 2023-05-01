let books = JSON.parse(localStorage.getItem('books')) || [];
const createBook = document.querySelector('#addbook');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

function collectBooks(title, author) {
    const book = {title, author};
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    showBooks();
}

createBook.addEventListener('click', event => {
    event.preventDefault();
    collectBooks(title.value, author.value);
    title.value = '';
    author.value = '';
})


function showBooks() {
    if (localStorage.length !== 0) {

        const booksDiv = document.querySelector("#books");
        const list = document.createElement('ul');
        const item1 = document.createElement('li');
        const item2 = document.createElement('li');
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.classList.add('remove');
        const separator = document.createElement('hr');
        for(let i = 0; i < books.length; i++) {
            const singleBook = books[i];
            console.log(singleBook)
            item1.innerText = `${singleBook.title}`;
            item2.innerText = `${singleBook.author}`;
            list.appendChild(item1);
            removeButton.addEventListener('click', function () {
            removeBook(i)
            })
        }
        list.appendChild(item2);
        booksDiv.appendChild(list);
        booksDiv.appendChild(removeButton);
        booksDiv.appendChild(separator);
    }
}

function removeBook(index) {
    books = books.filter(book => book.title !== title);
    localStorage.setItem('books', JSON.stringify(books));
    showBooks();
}



showBooks();

console.log(localStorage)
// localStorage.clear();

