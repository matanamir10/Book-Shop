import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/auth";
import { bookReducer } from "./reducers/books";

let middlewares = composeWithDevTools(applyMiddleware(thunk));
if (process.env.NODE_ENV === "production") {
  middlewares = applyMiddleware(thunk);
}

export const store = createStore(
  combineReducers({
    auth: authReducer,
    book: bookReducer,
  }),
  middlewares
);
