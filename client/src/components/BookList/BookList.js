import React from "react";
import "./BookList.scss";
import { Book } from "./Book/Book";

export const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <Book book={book} />
      ))}
    </ul>
  );
};
