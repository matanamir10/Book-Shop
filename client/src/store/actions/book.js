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

export const createBook = (book) => {
  return async (dispatch) => {
    return new Promise((resolve) => {
      axios.post("/books/create", book).then((data) => {
        dispatch({
          type: CREATE_BOOK,
          book: data.newBook,
        });
        resolve();
      });
    });
  };
};

export const deleteBook = (bookId) => {
  return async (dispatch) => {
    await axios.post("/books/delete", bookId);
    dispatch({
      type: DELETE_BOOK,
      bookId,
    });
  };
};

// export const updateBook = (newBook) => {
//   return async (dispatch) => {
//     const { data: updatedBook } = await axios.post("/books/update", newBook);
//     dispatch({
//       type: UPDATE_BOOK,
//       updatedBook,
//     });
//   };
// };

// TODO: Do search action
