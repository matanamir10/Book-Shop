import React from "react";
import "./Auth.scss";
import {
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Paper,
} from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { authenticate } from "../../store/actions/auth";
import { AuthOptions } from "../../constants/authOptions";
import { Input } from "../../UI/Input";
import withErrorHandler from "../../withErrorHandler/withErrorHandler";

const Auth = () => {
  const disptach = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      authMethod: AuthOptions.SIGNIN,
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password should be at least 6 charachters")
        .max(20, "Password should be at maximum 6 charachters")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      let url = `/api/users/${values.authMethod}`;
      disptach(authenticate(url, values));
    },
  });

  return (
    <Paper elevation={10} className="auth" title="Book Shop Authentication">
      <form onSubmit={formik.handleSubmit} className="auth__form">
        <RadioGroup
          className="auth__radio"
          aria-label="method"
          name="authMethod"
          value={formik.values.authMethod}
          onChange={formik.handleChange}
        >
          <FormControlLabel
            value={AuthOptions.SIGNIN}
            control={<Radio />}
            label="Sign In"
          />
          <FormControlLabel
            value={AuthOptions.SIGNUP}
            control={<Radio />}
            label="Sign Up"
          />
        </RadioGroup>
        <Input
          label="Email"
          className="auth__input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
          errorMessage={formik.errors.email}
          variant="outlined"
        />
        <Input
          label="Password"
          className="auth__input"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
          errorMessage={formik.errors.password}
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default withErrorHandler(Auth);
