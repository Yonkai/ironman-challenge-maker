import TextInputFormik from './TextInputFormik'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const SignIntoYourAccount = (props) => {
  return (
    <div className='SignIntoYourAccount'>
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
          <TextInputFormik
            label='Email'
            name='email'
            type='email'
            placeholder='Enter your email.'
          />
          <TextInputFormik
            label='Passsword'
            name='password'
            type='password'
            placeholder='Enter your password.'
          />

          <button type='submit'>Sign In.</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SignIntoYourAccount
