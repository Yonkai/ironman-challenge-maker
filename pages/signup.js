import React from 'react'
import { signUp } from '../styles/pageSpecificStyles.js'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

// From formik tutorial, theres a lot of magic going on behind the scenes
// that you should know before trying to understand this without verencular context
// https://jaredpalmer.com/formik/docs/tutorial#leveraging-react-context

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

// And now we can use these
const SignupPage = () => {
  return (
    <section>
      <div>
        <h1>Sign Up for An Account! 😁</h1>
        <Formik
          initialValues={{
            email: '',
            name: '',
            password: ''
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, 'Must be 15 characters or less')
              .required('Required'),
            email: Yup.string()
              .email('Invalid email addresss`')
              .required('Required'),
            password: Yup.string()
              .required('No password provided.')
              .min(20, 'Password is too short - should be 20 chars minimum.')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          <Form>
            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='Enter your email.'
            />
            <MyTextInput
              label='Name'
              name='name'
              type='text'
              placeholder='Enter your name.'
            />
            <MyTextInput
              label='Passsword'
              name='password'
              type='password'
              placeholder='Enter your password.'
            />

            <button type='submit'>Sign Up!</button>
          </Form>
        </Formik>
      </div>
      <div>
        <h1>Sign into your account. 😏</h1>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email addresss`')
              .required('Required'),
            password: Yup.string()
              .required('No password provided.')
              .min(20, 'Password is too short - should be 20 chars minimum.')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          <Form>
            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='Enter your email.'
            />
            <MyTextInput
              label='Passsword'
              name='password'
              type='password'
              placeholder='Enter your password.'
            />

            <button type='submit'>Sign In.</button>
          </Form>
        </Formik>
      </div>

      <div>
        <h1>Request password reset. 🤔</h1>
        <Formik
          initialValues={{
            email: ''
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('Invalid email addresss`')
              .required('Required')
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 400)
          }}
        >
          <Form>
            <MyTextInput
              label='Email'
              name='email'
              type='email'
              placeholder='Enter your email.'
            />

            <button type='submit'>Request Reset.</button>
          </Form>
        </Formik>
      </div>
      <style jsx>
        {`div{
          border:2px solid rgba(220,220,220,1);
          background-color:rgba(240,240,240,1);
          margin:10px;
        }`}
      </style>
    </section>
  )
}

SignupPage.getInitialProps = async function () {
  // define a prop for external stylesheet and then pass to _app,
  // where it will dynamically redefine the _app shell for each
  // page, definitely a workaround but I can't find a better
  // solution right now.
  return { overwrittenLayout: signUp }
}

export default SignupPage
