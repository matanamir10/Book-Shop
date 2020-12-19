import React, { useEffect } from "react";
import "./BooksPurchases.scss";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchPurchaseBook } from "../../store/actions/book";

const BooksPurchases = () => {
  const dispatch = useDispatch();
  const { purchaseBook } = useSelector((state) => state.book);

  const fetchMyParchases = () => {
    dispatch(fetchPurchaseBook());
  };
  useEffect(() => {
    fetchMyParchases();
  }, []);
  return (
    <div className="books-purchases">
      <Button color="primary" onClick={fetchMyParchases}>
        Get my purchases
      </Button>
      <ul className="books-purchases__list">
        {purchaseBook &&
          purchaseBook.map((book) => {
            return (
              <ul className="books-purchases__item">
                <h2>{book.book}</h2>
              </ul>
            );
          })}
      </ul>
    </div>
  );
};

export default BooksPurchases;
