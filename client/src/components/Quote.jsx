import React, {useRef} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Quote() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  window.scrollTo(0, 0)

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    service: Yup.string().required("Please select a service"),
    message: Yup.string().required("Please describe your project")
  });

  const form = useRef()
  const sendEmail = () => {
    emailjs.sendForm('service_h4te595', 'template_34r1c2c', form.current, {
        publicKey: 'fc6N7Mxlt9B5xB58I',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    alert("Quote request sent successfully!");
    resetForm();
    sendEmail()
  };

  return (
    <section className="quote" id="quote">

      <FontAwesomeIcon icon={faArrowLeft} className='back-icon' onClick={handleBackClick} />
      <div className="quote-header">
        <h2>Get a Quote</h2>
        <p>
          Tell us about your project and the UniSoft team will provide a
          customized solution for your business.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >

        <Form className="quote-form" ref={form}>

          <div className="form-group">
            <Field type="text" name="name" placeholder="Your Name" />
            <ErrorMessage name="name" component="span" className="error"/>
          </div>

          <div className="form-group">
            <Field type="email" name="email" placeholder="Your Email" />
            <ErrorMessage name="email" component="span" className="error"/>
          </div>

          <div className="form-group">
            <Field type="tel" name="phone" placeholder="Phone Number" />
          </div>

          <div className="form-group">
            <Field as="select" name="service">
              <option value="">Select Service</option>
              <option value="website">Website Development</option>
              <option value="webapp">Web Application</option>
              <option value="software">Custom Software</option>
              <option value="design">UI/UX Design</option>
            </Field>
            <ErrorMessage name="service" component="span" className="error"/>
          </div>

          <div className="form-group">
            <Field
              as="textarea"
              name="message"
              rows="5"
              placeholder="Describe your project"
            />
            <ErrorMessage name="message" component="span" className="error"/>
          </div>

          <button type="submit">Request Quote</button>

        </Form>

      </Formik>

    </section>
  );
}

export default Quote;