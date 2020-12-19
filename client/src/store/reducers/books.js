import {
  FETCH_BOOKS,
  CREATE_BOOK,
  DELETE_BOOK,
  UPDATE_BOOK,
  SEARCH_BOOK,
  fetchBooks,
} from "../actions/book";

const initalState = {
  books: [],
};

export const bookReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { books: action.books };
  }
};
