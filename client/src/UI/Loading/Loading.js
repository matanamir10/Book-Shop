import React from "react";
import "./Loading.scss";
import { CircularProgress } from "@material-ui/core";

export const Loading = () => {
  return (
    <div className="loading-container">
      <CircularProgress color="secondary" />
    </div>
  );
};
