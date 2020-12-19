import {
  FETCH_BOOKS,
  CREATE_BOOK,
  DELETE_BOOK,
  UPDATE_BOOK,
  SEARCH_BOOK,
  updateBook,
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
    case UPDATE_BOOK:
      const { id } = action.updatedBook;
      const copyBooks = [...state.books];
      const updtaedBookIndex = copyBooks.findIndex((book) => book.id === id);
      copyBooks[updtaedBookIndex] = action.updatedBook;
      return {
        books: copyBooks,
      };
    case SEARCH_BOOK:
      return { books: action.searchedBooks };
    default:
      return state;
  }
};
