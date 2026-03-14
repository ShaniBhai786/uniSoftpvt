import React, { useRef } from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser';

const Feedback = () => {
  const initialValues = {
    name: '',
    email: '',
    message: ''
  }
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required')
  })

  const form = useRef()
  const sendEmail = () => {
    emailjs.sendForm('service_h4te595', 'template_2hvz81g', form.current, {
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

  const onSubmit = (values, {resetForm}) => {
    console.log(values)
    sendEmail()
    resetForm()
  }
  return (
    <div className='feedback-form'>
      <Formik initialValues = {initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form ref={form}>
            <div className="inputs-div">
            <h1 className='feed'>Feedback</h1>
            <div className="input">
              <Field type="text" name="name" placeholder='Your Name' className="input-field" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="input">
              <Field type="text" name="email" placeholder='Your Email' className="input-field" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="input">
              <Field type="text" name="message" id="message" placeholder='Your Message' className="input-field" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <button type="submit" className='submit-btn'>Send Message</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Feedback
