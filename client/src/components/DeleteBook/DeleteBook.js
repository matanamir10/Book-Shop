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

const DeleteBook = ({ details, handleClose }) => {
  const dispatch = useDispatch();

  const handleDeleteMessage = async () => {
    await dispatch(deleteBook(details.bookId));
    handleClose();
    toast.info("Book was deleted", {
      autoClose: 3000,
    });
  };
  return (
    <Dialog
      open={details.visible}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Are you sure ?</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
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
