import TextInputFormik from './TextInputFormik'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

const RequestPasswordReset = (props) => {
  return (
    <div className='RequestPasswordReset'>
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
        <Form method="post">
          <TextInputFormik
            label='Email: '
            name='email'
            type='email'
            placeholder='Enter your email.'
          />

          <button type='submit'>Request Reset.</button>
        </Form>
      </Formik>
    </div>

  )
}

export default RequestPasswordReset
