const fs = require("fs");
const path = require("path");
const uuid = require("uuid/v1");

const authorsPath = path.join(__dirname, "..", "data", "authors.json");
const booksPath = path.join(__dirname, "..", "data", "books.json");

const readAll = book_id => {
  // Read and parse the books file
  const booksJSON = fs.readFileSync(booksPath, "utf8");
  const books = JSON.parse(booksJSON);

  // Filter books by the id
  let filteredBooks = books.filter(book => book.id === book_id);

  let book = filteredBooks[0];
  // Read and parse the writers file
  const writersJSON = fs.readFileSync(writersPath, "utf8");
  const writer = JSON.parse(writersJSON);

  // Map over the books's  writer_id array
    const bookWriter = book.writer_ids.map(writer_id =>
    // Filter the writers array to capture each writer based on the id in the writer_id array
    writers.filter(writer => writer.id === writer_id)
  );

  return bookWriters;
};

module.exports = {
  readAll
};
