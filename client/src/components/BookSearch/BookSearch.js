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

const BookSearch = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="book-search">
      <div>
        <Input
          id="book-search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search"
        />
        <Button>Search Book</Button>
      </div>
    </div>
  );
};

export default BookSearch;
