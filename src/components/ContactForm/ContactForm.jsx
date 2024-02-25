import { nanoid } from "nanoid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { BsPhone, BsPerson } from "react-icons/bs";
import PropTypes from "prop-types";

import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format")
    .required("Required"),
});

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      ...values,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ errors, touched }) => (
        <Form className={css.containerForm}>
          <label className={css.formLabel} htmlFor={nameId}>
            Name
          </label>

          <div className={css.thumb}>
            <Field
              className={`${css.formInput} ${
                errors.name && touched.name && css.errorName
              }`}
              type="text"
              name="name"
              id={nameId}
              placeholder="Name"
            />
            <BsPerson className={css.iconInput} size="20" />
          </div>
          <ErrorMessage
            className={css.errorSpan}
            name="name"
            component="span"
          />

          <label className={css.formLabel} htmlFor={numberId}>
            Number
          </label>

          <div className={css.thumb}>
            <Field
              className={`${css.formInput} ${
                errors.number && touched.number && css.errorNumber
              }`}
              type="text"
              name="number"
              id={numberId}
              placeholder="xxx-xx-xx"
            />
            <BsPhone className={css.iconInput} size="20" />
          </div>
          <ErrorMessage
            className={css.errorSpan}
            name="number"
            component="span"
          />

          <button className={css.buttonAdd} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func,
};

export default ContactForm;
