import bookStore from './bookStore.js';
import addBook from './addBook.js';
import deleteBook from './deleteBook.js';
import date from './date.js';

// single page navigation
const navigation = () => {
  const bookPage = document.getElementById('book-page');
  const addBookPage = document.getElementById('add-book-page');
  const contactPage = document.getElementById('info');

  const listLinks = document.getElementById('list');
  const addLinks = document.getElementById('add');
  const contactLinks = document.getElementById('contact');
  const timeStamp = document.getElementById('date');

  document.addEventListener('DOMContentLoaded', () => {
    bookPage.style.display = 'block';
    addBookPage.style.display = 'none';
    contactPage.style.display = 'none';
    timeStamp.innerHTML = `${date()}`;
    bookStore.displayFromLocalStorage();
  });

  // display list page
  listLinks.addEventListener('click', () => {
    bookPage.style.display = 'block';
    addBookPage.style.display = 'none';
    contactPage.style.display = 'none';
    deleteBook();

    listLinks.classList.add('active-link');
    addLinks.classList.remove('active-link');
    contactLinks.classList.remove('active-link');
  });

  // display form to add books page
  addLinks.addEventListener('click', () => {
    bookPage.style.display = 'none';
    addBookPage.style.display = 'block';
    contactPage.style.display = 'none';
    addBook();

    listLinks.classList.remove('active-link');
    addLinks.classList.add('active-link');
    contactLinks.classList.remove('active-link');
  });

  // display form to add books page
  contactLinks.addEventListener('click', () => {
    bookPage.style.display = 'none';
    addBookPage.style.display = 'none';
    contactPage.style.display = 'block';

    listLinks.classList.remove('active-link');
    addLinks.classList.remove('active-link');
    contactLinks.classList.add('active-link');
  });
};

export default navigation;
