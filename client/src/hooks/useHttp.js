// custom hooks is for sharing logic not data
import React, { useReducer, useEffect, useCallback, useState } from "react";
import axios from "axios";

const initalState = {
  data: null,
  loading: false,
};

const httpReducer = (state, action) => {
  switch (action.type) {
    case "SEND":
      return { ...state, data: null, loading: true };
    case "RESPONE":
      return { ...state, data: action.data, loading: false };
    default:
      return state;
  }
};

export const useHttp = () => {
  const [state, dispatch] = useReducer(httpReducer, initalState);
  const { data, loading } = state;

  const makeHttpRequest = useCallback(async (url, method, body) => {
    dispatch({
      type: "SEND",
    });
    const { data: responseData } = await axios({ url, method, body });
    dispatch({
      type: "RESPONE",
      responseData,
    });
  }, []);

  useEffect(() => {
    if(loading){
      makeHttpRequest();
    }
  }, [makeHttpRequest, loading]);

  return {
    sendRequest: makeHttpRequest,
    data,
    loading,
  };
};

const useHttpHandler = () => {
  const [error, setError] = React.useState(false);
  const clearError = () => setError(null);

  //   manage axios intercptors
  const reqInterceptors = axios.interceptors.request.use(
    ((req) => {
      setError(null);
      return req;
    },
    (err) => {
      setError(err);
    })
  );

  const resInterceptors = axios.interceptors.response(
    ((res) => res,
    (err) => {
      setError(err);
      return Promise.reject(err);
    })
  );

  useEffect(() => {
    return () => {
      axios.interceptors.request.eject(reqInterceptors);
      axios.interceptors.response.eject(resInterceptors);
    };
  }, []);

  return [error, clearError];
};

const withErrorHandler = (WrappedComponent) => {
  return (props) => {
    const [error, setError] = useHttpHandler();

    let showErrorModal = null;
    if (error) {
      showErrorModal = <div>{error}</div>;
    }
    return (
      <>
        {showErrorModal}
        <WrappedComponent />
      </>
    );
  };
};

const withHttpErrorHandler = (WrappedComponent) => {
  return (props) => {
    const [error, clearError] = useHttpHandler();
    return (
      <React.Fragment>
        {error ? <h1>There is an error</h1> : null}
        <WrappedComponent {...props} clearError={clearError} />
      </React.Fragment>
    );
  };
};

const withHttpHandler = (WrappedComponent) => {
  return (props) => {
    const { sendRequest, data, loading } = useHttp();

    useEffect(() => {
      console.log(data);
    }, [data]);

    return (
      <>
        {loading ? <h1>SHow modal</h1> : null}
        <WrappedComponent {...props} sendRequest={sendRequest} data={data} />
      </>
    );
  };
};

const booksList = ({ sendRequest, data }) => {
  const books = data.map((book) => <h1>{book.name}</h1>);
  return (
    <React.Fragment>
      {books}
      <h1>
        <button
          onClick={sendRequest("http://localhost:4000/books", "GET")}
        ></button>
      </h1>
    </React.Fragment>
  );
};

export default React.memo(
  withHttpHandler(booksList),
  (prevProps, nextProps) => {
    if (prevProps.data === nextProps.data) {
      return false;
    }
    return true;
  }
);

// const AuthContext = React.createContext({ user: null });

// const AuthProvider = () => {
//   const [user, setUser] = React.useState(null);

//   return (props) => {
//     <AuthContext.Provider value={{ user }}>
//       {props.children}
//     </AuthContext.Provider>;
//   };
// };
