// UI INTERFACE DOM
// the container for the book card

const formView = document.querySelector('.form-container'); // Brings up entire form.

const form = document.querySelector('.formElement');

const formButton = document.getElementById('open-form');

const bookInfo = document.getElementById('card-wrapper'); // the info inside the book card

const bookCard = document.getElementById('card-container'); // contains the div for the card content to appear in HTML.

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
  event.preventDefault(); // prevents the page from refreshing.

  // takes the values of the inputs and displays them in the DOM
  const title = (document.getElementById('title')).value;
  const author = (document.getElementById('author')).value;
  const pages = (document.getElementById('pages')).value;
  const read = (document.getElementById('read')).value;

  // values will be placed within the parameter
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook); // pushes arrays to the newBook array
  displayBooks(myLibrary, bookInfo);
  readCheck();
  formToggle(); // activates the on or off switch when button is pressed.
  console.log(myLibrary) // shows the display of the array output.
  return false; // prevents page from submitting and refreshing.
}

// function that displays the book cards.
// generates a div card display to view each book.

function displayBooks(theLibrary, bookView) {
  // for each of the prameter of the arrays of "book", i will iterate through the book array."

  bookInfo.innerHTML = "";
  theLibrary.forEach((book, i) => {
    // includes the template for the card.
    // test what happens if data-info${i} is taken out
    const card = `<div id="card-container" data-info${i}> 
                    <div id="card-info-wrap">
                      <h2>Title: ${book.title}</h2>
                      <h3>Author: ${book.author}</h3>
                      <h3>Pages: ${book.pages}</h3>
                      <div class="readCheck" onclick="readCheck()"><h3> Read </h3></div>
                      <button onclick="removeBook()" class="removeBtn"> Remove </button>
                    </div>
                  </div>`

    // creates a div
    const divElement = document.createElement('div');
    // the new div element will have the content of the book card inside.
    divElement.innerHTML = card;
    bookView.appendChild(divElement.firstChild);
  });
};

// removes book card.
// deletes everything and not indidivually.
// function removeBook() {
//   bookInfo.parentNode.removeChild(this);
// }

// makes read button changes on click
function readCheck() {
  if (read.checked) {
    read.checked = false;
    document.querySelector('.readCheck').style.backgroundColor = 'lightgreen';
  } else {
    read.checked = true;
    document.querySelector('.readCheck').style.backgroundColor = 'lightsalmon';
  }
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