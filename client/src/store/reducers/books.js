import {
  FETCH_BOOKS,
  CREATE_BOOK,
  DELETE_BOOK,
  UPDATE_BOOK,
  SEARCH_BOOK,
} from "../actions/book";

const initalState = {
  books: [],
};

export const bookReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { books: action.books };
    case CREATE_BOOK:
      return { books: [...state.books, action.book] };
    case DELETE_BOOK:
      return {
        books: [...state.books].filter((book) => book.id !== action.bookId),
      };
    default:
      return state;
  }
};
