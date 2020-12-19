import React, { useState } from "react";
import "./BookSearch.scss";
import { Button } from "@material-ui/core";
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
        placeholder="search book name"
      />
      <Button className="book-search__cta" color="primary" variant="contained">
        Search Book
      </Button>
    </div>
  );
};
