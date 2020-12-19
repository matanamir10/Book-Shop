import React, { useState } from "react";
import "./BookSearch.scss";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { searchBook } from "../../store/actions/book";
import { Input } from "../../UI/Input";

export const BookSearch = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const searchBooks = () => {
    if (!search || search === "") {
      toast.warning("Need to provide text");
      return;
    }
    dispatch(searchBook(search));
  };
  return (
    <div className="book-search">
      <Input
        id="book-search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search book name"
      />
      <Button
        className="book-search__cta"
        color="primary"
        variant="contained"
        onClick={searchBooks}
      >
        Search Book
      </Button>
    </div>
  );
};
