import React, { useEffect } from "react";
import "./BookList.scss";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/actions/book";
import { BookSearch } from "../BookSearch/BookSearch";
import { Book } from "./Book/Book";

const BookList = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);

  const getBooks = () => {
    dispatch(fetchBooks());
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <ul className="book-list">
      <div className="book-list__actions">
        <BookSearch />
        <Button onClick={getBooks} variant="contained" color="secondary">
          Show More
        </Button>
      </div>
      {books && books.map((book) => <Book book={book} key={book.id} />)}
    </ul>
  );
};

export default BookList;
