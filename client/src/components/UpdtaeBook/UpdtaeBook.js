import React, { useMemo } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import "./UpdtaeBook.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateBook } from "../../store/actions/book";
import { Input } from "../../UI/Input";
import { ModalOptions } from "../../constants/modalOptions";

const UpdtaeBook = ({ details, handleClose }) => {
  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.book);
  const { bookId, modalId, visible } = details;

  const currentBook = useMemo(() => {
    return books.find((book) => {
      return book.id === bookId;
    });
  }, [bookId]);

  if (!currentBook) {
    handleClose();
  }

  const formik = useFormik({
    initialValues: {
      book: currentBook.book,
      author: currentBook.author,
      publisher: currentBook.publisher,
    },
    validationSchema: Yup.object({
      book: Yup.string().required("Required"),
      author: Yup.string().required("Required"),
      publisher: Yup.string().required("Required"),
    }),
    onSubmit: async (bookValues) => {
      await dispatch(updateBook({ ...currentBook, ...bookValues }));
      formik.resetForm();
      handleClose();
      toast.success("Book was updated", { autoClose: 3000 });
    },
  });

  return (
    <Dialog
      className="update-book"
      open={visible && modalId === ModalOptions.BOOK_UPDATE}
      onClose={handleClose}
      aria-labelledby="update-book-title"
    >
      <DialogTitle id="update-dialog-title">Update Book</DialogTitle>
      <DialogContent className="update-book__content">
        <DialogContentText>
          The book will be update with these values
        </DialogContentText>
        <form className="update-book__form" onSubmit={formik.handleSubmit}>
          <Input
            label="Book"
            id="update_book"
            className="update-book__input"
            name="book"
            type="book"
            onChange={formik.handleChange}
            value={formik.values.book}
            error={formik.touched.book && formik.errors.book}
            errorMessage={formik.errors.book}
            variant="outlined"
          />
          <Input
            label="Author"
            id="update_author"
            className="update-book__input"
            name="author"
            type="author"
            onChange={formik.handleChange}
            value={formik.values.author}
            error={formik.touched.author && formik.errors.author}
            errorMessage={formik.errors.author}
            variant="outlined"
          />
          <Input
            label="Publisher"
            id="update_publisher"
            className="update-book__input"
            name="publisher"
            type="publisher"
            onChange={formik.handleChange}
            value={formik.values.publisher}
            error={formik.touched.publisher && formik.errors.publisher}
            errorMessage={formik.errors.publisher}
            variant="outlined"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={formik.handleSubmit} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdtaeBook;
