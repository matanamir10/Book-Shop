import React, { useEffect } from "react";
import "./App.scss";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Auth from "../Auth/Auth";
import { autoAuthenticate } from "../../store/actions/auth";

export const App = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(autoAuthenticate());
  }, []);

  useEffect(() => {
    if (auth.isAuth) {
      history.push("/book-store");
    }
  }, [auth]);

  return <div>App</div>;
};
