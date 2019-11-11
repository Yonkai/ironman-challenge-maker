import TextInputFormik from './TextInputFormik'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const SignUpForAccount = (props) => {
  return (
    <div className='SignUpForAccount'>
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
          <TextInputFormik
            label='Email'
            name='email'
            type='email'
            placeholder='Enter your email.'
          />
          <TextInputFormik
            label='Name'
            name='name'
            type='text'
            placeholder='Enter your name.'
          />
          <TextInputFormik
            label='Passsword'
            name='password'
            type='password'
            placeholder='Enter your password.'
          />

          <button type='submit'>Sign Up!</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SignUpForAccount
