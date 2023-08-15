import BookUI from './bookUI.js';

// bookStore
class bookStore {
  static getBooks = () => {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  };

  static addToLocalStorage(newBook) {
    const books = bookStore.getBooks();
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static displayFromLocalStorage() {
    const books = bookStore.getBooks();

    const ui = new BookUI();
    books.forEach((book) => {
      ui.displayBooks(book);
    });
  }
}

export default bookStore;
