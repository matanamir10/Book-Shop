import React from "react";
import { Dialog, DialogTitle } from "@material-ui/core";
import useHttpErrorHandler from "../hooks/http-error-handler";

const withErrorHandler = (WrappedComponent) => {
  return (props) => {
    const [error, clearError] = useHttpErrorHandler();

    return (
      <div>
        <Dialog
          onClose={clearError}
          aria-labelledby='error-modal-title'
          open={error}
        >
          <DialogTitle id='error-modal'>Error occured: {error}</DialogTitle>
        </Dialog>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withErrorHandler;
