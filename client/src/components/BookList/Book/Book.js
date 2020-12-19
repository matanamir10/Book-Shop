import React from "react";
import "./Book.scss";
import { Card, CardContent, Typography } from "@material-ui/core";

export const Book = ({ book }) => {
  return (
    <li className="book">
      <Card className="book__card">
        <CardContent>
          <Typography>{book.book}</Typography>
          <Typography>{book.author}</Typography>
          <Typography>{book.publisher}</Typography>
        </CardContent>
      </Card>
    </li>
  );
};
