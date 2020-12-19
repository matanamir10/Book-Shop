import axios from "axios";

export const FETCH_BOOKS = "fetch_books";
export const SEARCH_BOOK = "search_book";
export const CREATE_BOOK = "create_book";
export const DELETE_BOOK = "delete_book";
export const UPDATE_BOOK = "update_book";

// Maybe add pagination
export const fetchBooks = () => {
  return async (dispatch) => {
    const { data: books } = await axios.get("/books");
    dispatch({
      type: FETCH_BOOKS,
      books,
    });
  };
};
