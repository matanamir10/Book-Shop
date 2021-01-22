import React from "react";
import {
  findByText,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
// import BookList from "./BookList";
// import Book from "./Book/Book";
// import { store } from "../../store/storeConfig";

const Counter = (props) => {
  const [value, setValue] = React.useState(0);
  const incrament = () => {
    setTimeout(() => {
      setValue((prev) => prev + 1);
    }, 2500);
  };
  return (
    <div data-testid='counter-div' onClick={incrament}>
      {value}
    </div>
  );
};

describe("Counter", () => {
  it("Should incrament counter value", async () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId("counter-div"));
    expect(await findByText("1")).toBeTruthy();
  });
});
// describe("Should render a list of books", () => {
//   store.dispatch({
//     type: "fetch_books",
//     books: [
//       { name: "Matan", author: "Maariv" },
//       { name: "M16", author: "Gun" },
//     ],
//   });
//   screen.debug(store.getState());
// });
