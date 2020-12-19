import React from "react";
import { TextField } from "@material-ui/core";

export const Input = (props) => {
  return (
    <>
      <TextField {...props} />
      {props.error ? <div>{props.errorMessage}</div> : null}
    </>
  );
};
