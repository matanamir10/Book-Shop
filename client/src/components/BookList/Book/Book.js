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

export const Book = ({ book }) => {
  const { user } = useSelector((state) => state.auth);

  let actions = (
    <Button size="small" color="primary">
      Purchase
    </Button>
  );
  if (user.admin) {
    actions = (
      <>
        <Button size="small" color="primary">
          Update
        </Button>
        <Button size="small" color="primary">
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
