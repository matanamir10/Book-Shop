import React from "react";
import "./CreateBook.scss";
import { Paper, Button } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createBook } from "../../store/actions/book";
import { Input } from "../../UI/Input";

const CreateBook = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      book: "",
      author: "",
      publisher: "",
    },
    validationSchema: Yup.object({
      book: Yup.string().required("Required"),
      author: Yup.string().required("Required"),
      publisher: Yup.string().required("Required"),
    }),
    onSubmit: async (bookValues) => {
      await dispatch(createBook(bookValues));
      toast.success("Book was created", { autoClose: 3000 });
    },
  });
  return (
    <Paper className="create-book" elevation={5}>
      <form className="create-book__form" onSubmit={formik.handleSubmit}>
        <Input
          label="Book"
          className="auth__input"
          id="book"
          name="book"
          type="book"
          onChange={formik.handleChange}
          value={formik.values.book}
          error={formik.touched.book && formik.errors.book}
          errorMessage={formik.errors.book}
          variant="outlined"
        />
        <Input
          label="Author"
          className="auth__input"
          id="author"
          name="author"
          type="author"
          onChange={formik.handleChange}
          value={formik.values.author}
          error={formik.touched.author && formik.errors.author}
          errorMessage={formik.errors.author}
          variant="outlined"
        />
        <Input
          label="Publisher"
          className="auth__input"
          id="publisher"
          name="publisher"
          type="publisher"
          onChange={formik.handleChange}
          value={formik.values.publisher}
          error={formik.touched.publisher && formik.errors.publisher}
          errorMessage={formik.errors.publisher}
          variant="outlined"
        />
        <Button
          className="create-book__cta"
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
};

export default CreateBook;
