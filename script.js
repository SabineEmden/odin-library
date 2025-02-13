function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.print = function () {
  let status = "not read yet";
  if (this.read) status = "read";
  return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`;
};

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

console.log(theHobbit.print());
