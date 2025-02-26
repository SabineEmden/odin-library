// SET UP LIBRARY

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title; // string
  this.author = author; // string
  this.pages = pages; // number
  this.read = read; // boolean
}

Book.prototype.display = function () {
  let status = "not read yet";
  if (this.read) status = "read";
  return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`;
};

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("When Women Were Dragons", "Kelly Barnhill", 367, true);
addBookToLibrary("My Tender Matador", "Pedro Lemebel", 170, true);
addBookToLibrary("Our Share of Night", "Mariana Enriquez", 588, false);
addBookToLibrary("Cantoras", "Carolin De Robertis", 317, false);

// DISPLAY BOOKS ON PAGE

const container = document.querySelector("#container");

const placeholder = document.createElement("p");
placeholder.classList.add("placeholder");
placeholder.textContent = "There are no books in the library.";

function createBookList(library) {
  let bookList = document.createElement("ul");
  bookList.classList.add("book-list");
  for (let book of library) {
    let listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.textContent = book.display();
    bookList.appendChild(listItem);
  }
  return bookList;
}

function displayLibrary() {
  if (myLibrary.length === 0) {
    container.appendChild(placeholder);
  } else {
    container.appendChild(createBookList(myLibrary));
  }
}

displayLibrary();
