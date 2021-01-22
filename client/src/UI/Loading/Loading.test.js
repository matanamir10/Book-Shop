import React, { useState } from "react";
import { render, screen, fireEvent } from "@testing-library/react";

const Button = (props) => {
  const [isDark, setIsdark] = useState(false);
  let btnClasses = "basic";
  if (isDark) {
    btnClasses = btnClasses.concat(" ").concat("dark");
  }
  return (
    <div>
      <button className={btnClasses}>{props.children}</button>;
      <button
        data-testid='toggle-btn'
        onClick={() => setIsdark((prev) => !prev)}
      >
        {isDark ? "Love" : "Peace"}
      </button>
      ;
    </div>
  );
};

test("Should render button", () => {
  render(<Button>Matan</Button>);
  const ToggleButton = screen.getByTestId("toggle-btn");
  expect(ToggleButton).toHaveTextContent("Peace");
  expect(screen.getByText(/Mat/)).not.toHaveClass("dark");
  fireEvent.click(ToggleButton);
  expect(screen.getByText(/Mat/)).toHaveClass("dark");
  expect(ToggleButton).toHaveTextContent("Love");
});
