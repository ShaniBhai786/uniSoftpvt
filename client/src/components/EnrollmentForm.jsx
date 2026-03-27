import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.jpeg";
import emailjs from '@emailjs/browser';

import {
  faArrowLeft,
  faUser,
  faUserTie,
  faEnvelope,
  faPhone,
  faCalendar,
  faVenusMars,
  faSchool,
  faBook,
  faLocationDot,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";
import Loading from "./Loading";

function EnrollmentForm() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleBackClick = () => navigate(-1);

  window.scrollTo(0, 0);

  const initialValues = {
    name: "",
    fatherName: "",
    email: "",
    phone: "",
    guardianPhone: "",
    dob: "",
    gender: "",
    class: "",
    course: "",
    address: "",
    cnic: "",
    previousSchool: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    fatherName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid").required("Required"),
    phone: Yup.string().required("Required"),
    guardianPhone: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    class: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    cnic: Yup.string().required("Required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      await emailjs.sendForm('service_iu869fm', 'template_0ds7q6l', form.current, {
          publicKey: '5NYUNk6egOmHicaIZ',
        })
    } catch (error) {
      console.log(error);
      alert("Error Submiting form, Try again Later!")
    }
    finally{
      
    }
    console.log(values);
    setTimeout(() => {
      setLoading(true)
    },2000) 
    setTimeout(() => {
      alert("Enrollment Completed Successfully!");
      setLoading(false)
    },1000)
    resetForm();
  };

  return (
    <div className="enrollment-form-container">
      {loading && <Loading /> }
      <FontAwesomeIcon icon={faArrowLeft} className="back-icon" onClick={handleBackClick} />

      <div className="form-container">
        <img src={logo} alt="Logo" />
        <h2> Student Enrollment Form</h2>

        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form className="form">

            <div className="form-group">
              <label><FontAwesomeIcon icon={faUser} /> Student Name</label>
              <Field type="text" name="name" placeholder="Enter student name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faUserTie} /> Father Name</label>
              <Field type="text" name="fatherName" placeholder="Enter father name" />
              <ErrorMessage name="fatherName" component="div" className="error" />
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faEnvelope} /> Email</label>
              <Field type="email" name="email" placeholder="Enter email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faPhone} /> Phone</label>
              <Field type="number" name="phone" placeholder="Student phone" />
              <ErrorMessage name="phone" component="div" className="error" />
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faPhone} /> Guardian Phone</label>
              <Field type="number" name="guardianPhone" placeholder="Guardian phone" />
              <ErrorMessage name="guardianPhone" component="div" className="error" />
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faCalendar} /> Date of Birth</label>
              <Field type="date" name="dob" />
              <ErrorMessage name="dob" component="div" className="error" />
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faVenusMars} /> Gender</label>
              <Field as="select" name="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faSchool} /> Class</label>
              <Field as="select" name="class">
                <option value="">Select Class</option>
                <option value="pg">Play Group</option>
                <option value="nursery">Nursery</option>
                <option value="kg">KG</option>
                <option value="1">Class 1</option>
                <option value="2">Class 2</option>
                <option value="3">Class 3</option>
                <option value="4">Class 4</option>
                <option value="5">Class 5</option>
                <option value="6">Class 6</option>
                <option value="7">Class 7</option>
                <option value="8">Class 8</option>
                <option value="9">Class 9</option>
                <option value="10">Matric</option>
                <option value="11">1st Year</option>
                <option value="12">2nd Year</option>
              </Field>
              <ErrorMessage name="class" component="div" className="error" />
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faIdCard} /> B-Form / CNIC</label>
              <Field type="text" name="cnic" placeholder="Enter CNIC or B-Form" />
              <ErrorMessage name="cnic" component="div" className="error" />
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faBook} /> Previous School</label>
              <Field type="text" name="previousSchool" placeholder="Previous school name" />
            </div>

            <div className="form-group">
              <label><FontAwesomeIcon icon={faLocationDot} /> Address</label>
              <Field as="textarea" name="address" placeholder="Enter address" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>

            <button type="submit" className="enroll-btn">
              Enroll Now
            </button>

          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EnrollmentForm;