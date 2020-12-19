import React, { useEffect, useState } from "react";
import "./BookList.scss";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../store/actions/book";
import { BookSearch } from "../BookSearch/BookSearch";
import { Book } from "./Book/Book";
import DeleteBook from "../DeleteBook/DeleteBook";
import UpdtaeBook from "../UpdtaeBook/UpdtaeBook";

const BookList = () => {
  const [showDeleteModal, setShowDeleteModal] = useState({
    visible: false,
    modalId: null,
    bookId: null,
  });
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);

  const handleClose = () =>
    setShowDeleteModal({ visible: false, modalId: null, bookId: null });

  const handleModals = (modalId, bookId) => {
    setShowDeleteModal({ visible: true, modalId, bookId });
  };

  const getBooks = () => {
    dispatch(fetchBooks());
  };

  useEffect(() => {
    getBooks();
  }, []);

  let modals = null;
  if (showDeleteModal.modalId) {
    modals = (
      <>
        <DeleteBook details={showDeleteModal} handleClose={handleClose} />
        <UpdtaeBook details={showDeleteModal} handleClose={handleClose} />
      </>
    );
  }
  return (
    <ul className="book-list">
      {modals}
      <div className="book-list__actions">
        <BookSearch />
        <Button onClick={getBooks} variant="contained" color="secondary">
          Refresh
        </Button>
      </div>
      {books &&
        books.map((book) => (
          <Book book={book} key={book.id} handleModals={handleModals} />
        ))}
    </ul>
  );
};

export default BookList;
