const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title; // string
  this.author = author; // string
  this.pages = pages; // number
  this.read = read; // boolean
}

Book.prototype.print = function () {
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

const container = document.querySelector("#container");

const placeholder = document.createElement("p");
placeholder.classList.add("placeholder");
placeholder.textContent = "There are no books in the library.";

container.appendChild(placeholder);

const booklist = document.createElement("ul");
booklist.classList.add("booklist");

for (let book of myLibrary) {
  const listItem = document.createElement("li");
  listItem.textContent = book.print();
  container.appendChild(listItem);
}
