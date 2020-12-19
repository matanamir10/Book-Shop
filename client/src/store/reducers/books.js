import {
  FETCH_BOOKS,
  CREATE_BOOK,
  DELETE_BOOK,
  UPDATE_BOOK,
  SEARCH_BOOK,
  PURCHASE_BOOK,
  FETCH_PURCHASED_BOOK,
} from "../actions/book";

const initalState = {
  books: [],
  purchaseBook: [],
};

export const bookReducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return { ...state, books: action.books };
    case CREATE_BOOK:
      return { ...state, books: [...state.books, action.book] };
    case DELETE_BOOK:
      return {
        ...state,
        books: [...state.books].filter((book) => book.id !== action.bookId),
      };
    case UPDATE_BOOK:
      const { id } = action.updatedBook;
      const copyBooks = [...state.books];
      const updtaedBookIndex = copyBooks.findIndex((book) => book.id === id);
      copyBooks[updtaedBookIndex] = action.updatedBook;
      return {
        ...state,
        books: copyBooks,
      };
    case SEARCH_BOOK:
      return { ...state, books: action.searchedBooks };

    case PURCHASE_BOOK:
      return state;
    case FETCH_PURCHASED_BOOK:
      return { ...state, purchaseBook: action.purchasedBooks };
    default:
      return state;
  }
};
