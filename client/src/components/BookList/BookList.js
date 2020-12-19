import React from "react";
import "./BookList.scss";
import { Book } from "./Book/Book";

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books && books.map((book) => <Book book={book} key={book.id} />)}
    </ul>
  );
};

export default BookList;
