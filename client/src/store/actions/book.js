import axios from "axios";

export const FETCH_BOOKS = "fetch_books";
export const SEARCH_BOOK = "search_book";
export const CREATE_BOOK = "create_book";
export const DELETE_BOOK = "delete_book";
export const UPDATE_BOOK = "update_book";
export const PURCHASE_BOOK = "purchase_book";
export const FETCH_PURCHASED_BOOK = "fetch_purchase_book";

// Maybe add pagination
export const fetchBooks = () => {
  return async (dispatch) => {
    const { data: books } = await axios.get("/api/books");
    dispatch({
      type: FETCH_BOOKS,
      books,
    });
  };
};

export const createBook = (book) => {
  return async (dispatch) => {
    return new Promise((resolve) => {
      axios.post("/api/books/create", book).then(({ data: book }) => {
        dispatch({
          type: CREATE_BOOK,
          book,
        });
        resolve();
      });
    });
  };
};

export const deleteBook = (bookId) => {
  console.log("bookId", bookId);
  return async (dispatch) => {
    return new Promise((resolve) => {
      axios.delete(`/api/books/${bookId}`).then(() => {
        dispatch({
          type: DELETE_BOOK,
          bookId,
        });
        resolve();
      });
    });
  };
};

export const updateBook = (newBook) => {
  return async (dispatch) => {
    return new Promise((resolve) => {
      axios.patch("/api/books", newBook).then(({ data }) => {
        dispatch({
          type: UPDATE_BOOK,
          updatedBook: data,
        });
      });
      resolve();
    });
  };
};

export const searchBook = (search) => {
  return async (dispatch) => {
    const { data: searchedBooks } = await axios.get(`/api/books/${search}`);
    dispatch({
      type: SEARCH_BOOK,
      searchedBooks,
    });
  };
};

export const purchaseBook = (bookId) => {
  console.log("bookId", bookId);
  return async (dispatch) => {
    return new Promise((resolve) => {
      axios.post(`/api/books/purchase`, { bookId }).then(() => {
        dispatch({
          type: PURCHASE_BOOK,
        });
        resolve();
      });
    });
  };
};

export const fetchPurchaseBook = (bookId) => {
  return async (dispatch) => {
    const { data: purchasedBooks } = await axios.get(`/api/books/purchase`);
    dispatch({
      type: FETCH_PURCHASED_BOOK,
      purchasedBooks,
    });
  };
};
