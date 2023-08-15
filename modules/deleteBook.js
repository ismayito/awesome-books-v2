import BookUI from './bookUI.js';
import bookStore from './bookStore.js';

// Remove books
const deleteBook = () => {
  const bookList = document.querySelector('.book-list');
  bookList.addEventListener('click', (e) => {
    if (e.target.id === 'remove') {
      const books = bookStore.getBooks();
      const liParent = e.target.parentElement;

      const filteredBooks = books.filter((book) => book.id !== liParent.id);
      liParent.remove();
      localStorage.setItem('books', JSON.stringify(filteredBooks));

      const successMessage = 'Book removed successfully';
      const ui = new BookUI();
      ui.showMessage(successMessage, true);
    }
    // prevent default click behavior
    e.preventDefault();
  });
};

export default deleteBook;
