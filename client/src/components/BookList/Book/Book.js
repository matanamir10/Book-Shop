import React from "react";
import "./Book.scss";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { ModalOptions } from "../../../constants/modalOptions";

export const Book = ({ book, handleModals }) => {
  const { user } = useSelector((state) => state.auth);

  let actions = (
    <Button size="small" color="primary">
      Purchase
    </Button>
  );
  if (user.admin) {
    actions = (
      <>
        <Button
          size="small"
          color="primary"
          onClick={handleModals.bind(null, ModalOptions.BOOK_UPDATE, book.id)}
        >
          Update
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={handleModals.bind(null, ModalOptions.BOOK_DELETE, book.id)}
        >
          Delete
        </Button>
      </>
    );
  }
  return (
    <li className="book">
      <Card className="book__card">
        <CardContent>
          {Object.keys(book).map((bookKey) => {
            return (
              <Typography className="book__details" key={bookKey}>
                <strong className="book__property">{bookKey}:</strong>
                <p className="book__value">{book[bookKey]}</p>
              </Typography>
            );
          })}
        </CardContent>
        <CardActions>{actions}</CardActions>
      </Card>
    </li>
  );
};
