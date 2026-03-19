import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faEnvelope,
  faPhone,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

function EnrollmentForm() {
    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  window.scrollTo(0, 0)
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    course: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    course: Yup.string().required("Course is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    alert("Enrollment Submitted!");
    resetForm();
  };

  return (
    <div className="form-container">
      <FontAwesomeIcon icon={faArrowLeft} className='back-icon' onClick={handleBackClick} />
      <h2>Enrollment Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form">

          {/* Name */}
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faUser} /> Name
            </label>
            <Field type="text" name="name" placeholder="Enter your name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </label>
            <Field type="email" name="email" placeholder="Enter your email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faPhone} /> Phone
            </label>
            <Field type="text" name="phone" placeholder="Enter your phone" />
            <ErrorMessage name="phone" component="div" className="error" />
          </div>

          {/* Course */}
          <div className="form-group">
            <label>
              <FontAwesomeIcon icon={faBook} /> Course
            </label>
            <Field as="select" name="course">
              <option value="">Select a course</option>
              <option value="web">Web Development</option>
              <option value="graphic">Graphic Design</option>
              <option value="python">Python Programming</option>
            </Field>
            <ErrorMessage name="course" component="div" className="error" />
          </div>

          <button type="submit">Enroll Now</button>
        </Form>
      </Formik>
    </div>
  );
}

export default EnrollmentForm;