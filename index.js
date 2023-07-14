// UI INTERFACE DOM
// the container for the book card

const formView = document.querySelector('.form-container'); // Brings up entire form.
const form = document.querySelector('.formElement');
const formButton = document.getElementById('open-form');
const bookInfo = document.getElementById('card-wrapper'); // the info inside the book card
const removeBtn = document.createElement('div');
const readBtn = document.createElement('div'); // Testing

// NEXT SECTION

// array stems from (Book, Author, Pages, Read) example
let myLibrary = [];
let newBook; // declared new variable.

// dont need to do anything for this justa way to define the values in the book card.
function Book (title, author, pages, read) {
  // the constructor (the this stuff is the contructor)
  // creates arrays to add to the book
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// takes the values from the form to add to the objects of the book function.
function addBookToLibrary() {
  // prevents the page from refreshing.
  event.preventDefault(); 
  // takes the values of the inputs and displays them in the DOM
  const title = (document.getElementById('title')).value;
  const author = (document.getElementById('author')).value;
  const pages = (document.getElementById('pages')).value;
  const read = (document.getElementById('read')).checked;

  // values will be placed within the parameter
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook); // pushes arrays to the newBook array
  displayBooks(myLibrary, bookInfo);
  formReset()
  readCheck();
  formToggle(); 
  // for testing
  console.log(myLibrary);
  return false; // prevents page from submitting and refreshing.
}

// function that displays the book cards.
// generates a div card display to view each book.

function displayBooks() {
  // for each of the prameter of the arrays of "book", i will iterate through the book array."

  bookInfo.innerHTML = "";

  // TEST
  for (let i = 0; i < myLibrary.length; i++) {
    removeBtn.innerHTML = `<button onclick="removeBook(${i})" class="removeBtn"> Remove </button>`;

    if (myLibrary[i].read) {
      readBtn.innerHTML = `<div class="readCheck" onclick="readCheck(${i})"><h3> Read </h3></div>`
    } else {
      readBtn.innerHTML = `<div class="notReadCheck" onclick="readCheck(${i})"><h3> Read </h3></div>`
    }
    const divElement = document.createElement('div');
    divElement.innerHTML =
                `<div id="card-container">
                  <div id="card-info-wrap">
                    <div><h2>Title: ${myLibrary[i].title}</h2></div>
                    <div><h3>Author: ${myLibrary[i].author}</h3></div>
                    <div><h3>Pages: ${myLibrary[i].pages}</h3></div>
                    ${readBtn.innerHTML}
                    ${removeBtn.innerHTML}
                  </div>
                </div>`;
    bookInfo.append(divElement);
  };
};

function removeBook(i) {
  myLibrary.splice(i, 1);
  displayBooks();
}

// makes read button changes on click
function readCheck(i) {
  if (myLibrary[i].read) {
    myLibrary[i].read = false;
    document.querySelector('.readCheck');
  } else {
    myLibrary[i].read = true;
    document.querySelector('.notReadCheck');
  }
  displayBooks();
}

// resets form values
function formReset() {
  document.getElementById('title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('pages').value = "";
}

// function makes menu visible.
function formToggle() {
  formView.classList.toggle('turn-on');
}

// toggles the form on or off when button +NEW BOOK is pressed.
formButton.addEventListener('click', formToggle);

// when the submit button is pressed the form values are taken and into an array and closes out the form visability.
document.addEventListener('DOMContentLoaded', (event) => {
  form.addEventListener('submit', function() {
    addBookToLibrary();
    console.log('works');
  })
});
