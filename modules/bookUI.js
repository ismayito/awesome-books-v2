const msg = document.querySelector('.msg');
const bookList = document.querySelector('.book-list');
// Create Display book on the UI
class BookUI {
  displayBooks = (newBook) => {
    const li = document.createElement('li');
    li.id = newBook.id;
    li.innerHTML = `
    <p>"${newBook.title}" by ${newBook.author}</p>
    <button id="remove" type="button">Remove</button>
  `;
    this.displayBooks = bookList.appendChild(li);
  };

  // Display messages to the UI
  showMessage = (message, isSuccess) => {
    msg.innerText = message;
    this.showMessage = msg.classList.add(isSuccess ? 'success' : 'error');
    setTimeout(() => {
      this.showMessage = msg.classList.remove('success', 'error');
      msg.innerText = '';
    }, 3000);
  };
}

export default BookUI;
