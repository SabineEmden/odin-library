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

console.log(myLibrary.length);

for (let book of myLibrary) {
  console.log(book.print());
}
