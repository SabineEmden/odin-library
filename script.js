// Set up library

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title; // string
  this.author = author; // string
  this.pages = pages; // number
  this.read = read; // boolean
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

addBookToLibrary("When Women Were Dragons", "Kelly Barnhill", 367, true);
addBookToLibrary("My Tender Matador", "Pedro Lemebel", 170, true);
addBookToLibrary("Our Share of Night", "Mariana Enriquez", 588, false);
addBookToLibrary("Cantoras", "Carolin De Robertis", 317, false);

// Display books on page

const container = document.querySelector("#container");

const placeholder = document.createElement("p");
placeholder.classList.add("placeholder");
placeholder.textContent = "There are no books in the library.";

function createBookCard(book) {
  let listItem = document.createElement("li");
  listItem.classList.add("book__card");

  let title = document.createElement("h2");
  title.classList.add("book__title");
  title.textContent = `${book.title}`;
  listItem.appendChild(title);

  let author = document.createElement("p");
  author.classList.add("book__author");
  author.textContent = `by ${book.author}`;
  listItem.appendChild(author);

  let pages = document.createElement("p");
  pages.classList.add("book__pages");
  pages.textContent = `${book.pages} pages`;
  listItem.appendChild(pages);

  let status = document.createElement("p");
  status.classList.add("book__status");
  status.textContent = `${book.read ? "Read" : "Not read yet"}`;
  listItem.appendChild(status);

  return listItem;
}

function createBookList(library) {
  let bookList = document.createElement("ul");
  bookList.classList.add("booklist");
  for (let book of library) {
    bookList.appendChild(createBookCard(book));
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

// Add book to library

const dialog = document.getElementById("dialog");
const modal = document.getElementById("modal");

modal.addEventListener("click", () => dialog.showModal());

const form = document.getElementById("bookForm");
const log = document.querySelector("#log");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let title = form.elements["title"].value;
  let author = form.elements["author"].value;
  let pages = form.elements["pages"].value;
  let read = form.elements["status"].value === "yes" ? true : false;

  addBookToLibrary(title, author, pages, read);
  displayLibrary();

  form.reset();
  dialog.close();
});
