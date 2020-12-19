import { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [error, setError] = useState();

  const reqInterceptor = axios.interceptors.request.use(
    (req) => {
      setError(null);
      return Promise.resolve(req);
    },
    (err) => {
      setError(true);
      return Promise.reject(err.message);
    }
  );
  const resInterceptor = axios.interceptors.response.use(
    (res) => {
      setError(null);
      return Promise.resolve(res);
    },
    (err) => {
      setError(err?.response?.data.errors[0].message || err.message);
      return Promise.reject(err);
    }
  );

  useEffect(() => {
    return () => {
      axios.interceptors.request.eject(reqInterceptor);
      axios.interceptors.response.eject(resInterceptor);
    };
  }, [reqInterceptor, resInterceptor]);

  const errorConfirmedHandler = () => {
    setError(null);
  };
  return [error, errorConfirmedHandler];
};
