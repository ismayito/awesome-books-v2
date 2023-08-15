import BookUI from './bookUI.js';
import bookStore from './bookStore.js';

// Add books
const addBook = () => {
  function Books(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const id = Math.random() * 2 + title; // Updated id calculation
    // check for any errors
    const ui = new BookUI();
    if (title.trim() === '' || author.trim() === '') {
      const errorMessage = 'All fields are required';

      ui.showMessage(errorMessage, false);
    } else {
      // Init the books object
      const newBook = new Books(id, title, author);

      // Display book on the UI
      ui.displayBooks(newBook);

      // Save books data to localStorage
      bookStore.addToLocalStorage(newBook);

      const successMessage = 'Book added successfully';
      ui.showMessage(successMessage, true);

      document.querySelector('#title').value = '';
      document.querySelector('#author').value = '';
    }
    // prevent default submit
    e.preventDefault();
  });
};

export default addBook;
