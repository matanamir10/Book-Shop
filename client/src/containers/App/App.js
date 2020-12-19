import React, { useEffect, Suspense } from "react";
import "./App.scss";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Auth from "../Auth/Auth";
import { Navigation } from "../../components/Navigation/Navigation";
import { Loading } from "../../UI/Loading/Loading";
import { autoAuthenticate } from "../../store/actions/auth";

const BookList = React.lazy(() => import("../../components/BookList/BookList"));
const CreateBook = React.lazy(() =>
  import("../../components/CreateBook/CreateBook")
);

const BooksPurchases = React.lazy(() =>
  import("../../components/BooksPurchases/BooksPurchases")
);

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

  let app = (
    <>
      <Route component={Auth} />
      <Redirect from="/" to="/auth" />
    </>
  );
  if (auth.isAuth) {
    let createBookPermmisions = null;
    if (auth.user.admin) {
      createBookPermmisions = (
        <Route path="/create-book" component={CreateBook} />
      );
    }
    app = (
      <>
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/book-list" component={BookList} />
            <Route path="/books-purchases" component={BooksPurchases} />
            {createBookPermmisions}
            <Redirect from="/" to="/book-list" />
          </Switch>
        </Suspense>
        <ToastContainer />
      </>
    );
  }
  return <div className="container">{app}</div>;
};
