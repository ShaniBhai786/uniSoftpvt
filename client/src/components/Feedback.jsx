import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

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
  const onSubmit = (values, {resetForm}) => {
    console.log(values)
    resetForm()
  }
  return (
    <div className='feedback-form'>
      <Formik initialValues = {initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
            <div className="feed"><h1>Feedback</h1></div>
          <div className="inputs-div">
            <div className="input">
              <Field type="text" name="name" placeholder='Your Name' className="input-field" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="input">
              <Field type="text" name="email" placeholder='Your Email' className="input-field" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="input">
              <Field type="text" name="message" placeholder='Your Message' className="input-field" />
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
