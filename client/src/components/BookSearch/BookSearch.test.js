import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/storeConfig";
import { BookSearch } from "./BookSearch";

const Wrapper = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Component - BookSearch", () => {
  it("Should render component correctly", () => {
    const { getByTestId } = render(<BookSearch />, { wrapper: Wrapper });
    const inputElement = getByTestId("bookSearch-input");
    expect(inputElement).toBeInTheDocument();
  });

  it("Should change input value when typing", () => {
    const { getByPlaceholderText } = render(<BookSearch />, {
      wrapper: Wrapper,
    });
    const inputElement = getByPlaceholderText("search book name");
    expect(inputElement).toHaveValue("");
    fireEvent.change(inputElement, { target: { value: "matan" } });
    expect(inputElement).toHaveValue("matan");
  });
});
