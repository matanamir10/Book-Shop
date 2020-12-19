import React, { useEffect, useState } from "react";
import "./BookList.scss";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/actions/book";
import { BookSearch } from "../BookSearch/BookSearch";
import { Book } from "./Book/Book";
import DeleteBook from "../DeleteBook/DeleteBook";

const BookList = () => {
  const [showDeleteModal, setShowDeleteModal] = useState({
    visible: false,
    bookId: null,
  });
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);

  const handleClose = () =>
    setShowDeleteModal({ visible: false, bookId: null });

  const handleDelete = (bookId) => {
    setShowDeleteModal({ visible: true, bookId });
  };

  const getBooks = () => {
    dispatch(fetchBooks());
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <ul className="book-list">
      <DeleteBook details={showDeleteModal} handleClose={handleClose} />
      <div className="book-list__actions">
        <BookSearch />
        <Button onClick={getBooks} variant="contained" color="secondary">
          Show More
        </Button>
      </div>
      {books &&
        books.map((book) => (
          <Book book={book} key={book.id} handleDelete={handleDelete} />
        ))}
    </ul>
  );
};

export default BookList;
