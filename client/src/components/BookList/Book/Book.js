import React from "react";
import "./Book.scss";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { ModalOptions } from "../../../constants/modalOptions";

const Book = ({ admin, book, handleModals, handlePurchase }) => {
  let actions = (
    <Button
      size="small"
      color="primary"
      onClick={handlePurchase.bind(null, book.id)}
    >
      Purchase
    </Button>
  );

  if (admin) {
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
export default Book;
