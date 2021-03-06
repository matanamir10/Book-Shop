import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../store/actions/book";
import withErrorHandler from "../../withErrorHandler/withErrorHandler";
import { ModalOptions } from "../../constants/modalOptions";

const DeleteBook = ({ details, handleClose }) => {
  const dispatch = useDispatch();

  const { visible, modalId, bookId } = details;
  const handleDeleteMessage = async () => {
    await dispatch(deleteBook(bookId));
    handleClose();
    toast.info("Book was deleted", {
      autoClose: 3000,
    });
  };
  return (
    <Dialog
      open={visible && modalId === ModalOptions.BOOK_DELETE}
      onClose={handleClose}
      aria-labelledby="delete-book-dialog"
      aria-describedby="delete-book-dialog"
    >
      <DialogTitle id="alert-dialog-title">Are you sure ?</DialogTitle>
      <DialogContent>
        <DialogContentText id="delete-book-dialog">
          This book will be deleted
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleDeleteMessage} color="secondary" autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withErrorHandler(DeleteBook);
