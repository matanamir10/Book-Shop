import React, { useState } from "react";
import "./BookSearch.scss";
import {
  InputLabel,
  IconButton,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import { Input } from "../../UI/Input";

export const BookSearch = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="book-search">
      <Input
        id="book-search"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search books"
      />
      <Button className="book-search__cta" color="primary" variant="contained">
        Search Book
      </Button>
    </div>
  );
};
