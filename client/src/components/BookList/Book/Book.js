import React from "react";
import "./Book.scss";

export const Book = ({ book }) => {
  return <li className="book">{book}</li>;
};
