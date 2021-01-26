import { render, screen } from "@testing-library/react";
import Book from "./Book";

describe("Component - Book", () => {
  it("Should render Book Component", () => {
    const handlePurchase = () => {};
    const handleModals = () => {};
    const book = {
      id: "123",
    };
    const { getByTestId } = render(
      <Book
        book={book}
        handlePurchase={handlePurchase}
        handleModals={handleModals}
      />
    );
    const cardBookElement = getByTestId("book-card");
    expect(cardBookElement).toHaveClass("book__card");
  });

  it("should render admin content if provide admin porps", () => {
    const handlePurchase = () => {};
    const handleModals = () => {};
    const book = {
      id: "123",
    };
    const { getAllByRole } = render(
      <Book
        admin
        book={book}
        handlePurchase={handlePurchase}
        handleModals={handleModals}
      />
    );
    const buttonsElemetns = getAllByRole("button");
    expect(buttonsElemetns[buttonsElemetns.length - 1]).toHaveTextContent(
      "Delete"
    );
  });
});
