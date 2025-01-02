import styles from "./ContactForm.module.css";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import { nanoid } from "nanoid";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  number: yup.string().required("Number is required"),
});

function logToConsole(values) {
  console.log(
    "Contact added:",
    "\nName:",
    values.name,
    "\nNumber:",
    values.number
  );
}

function ContactForm({ onAddContact }) {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ id: nanoid(8), ...values });
    logToConsole(values);
    resetForm();
  };
  return (
    <div className={styles.contactForm}>
      <Formik
        className={styles.formik}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={styles.form}>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" placeholder="Name" />
          <label htmlFor="number">Number</label>
          <Field type="text" name="number" placeholder="Number" />
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
    </div>
  );
}

export default ContactForm;
