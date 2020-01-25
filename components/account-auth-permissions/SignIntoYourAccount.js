import TextInputFormik from './TextInputFormik'
import { Formik, Form } from 'formik'
import axios from 'axios'
import config from '../../data/config'
import useToggle from '../form-comps/hooks/useToggle'
import * as Yup from 'yup'

const SignIntoYourAccount = (props) => {
  const [on, toggle] = useToggle(true)
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
            .min(12, 'Password is too short - should be 12 chars minimum.')
        })}
        onSubmit={(values, { setSubmitting }) => {
          toggle()
          setTimeout( async () => {
            axios.post(`http://${config.backend_host}/auth/login`, {
              email:values.email,
              password:values.password
            },{withCredentials:true}).then(response => {console.log(response)}).catch(err=>{console.log(err)})
            // Visual confirmation that the form is doing something, UI/UX++:
            setTimeout(()=>{toggle()},500)
            setSubmitting(false)
          });
        }}
      >
        <Form method="post">
          <TextInputFormik
            label='Email: '
            name='email'
            type='email'
            placeholder='Enter your email.'
          />
          <TextInputFormik
            label='Passsword: '
            name='password'
            type='password'
            placeholder='Enter your password.'
          />

          <button type='submit'>Sign In.</button>
        </Form>
      </Formik>
      <style jsx>{
        `.SignUpForAccount {
          border:${on ? '':'3px solid green'};
        }
        .visualConfirmationForFormSubmission{
          display:${on ? 'none' : 'box'};
         text-align:center;
         margin:0;
         padding-bottom:4px;
        }
        `
      }
      </style>
    </div>
  )
}

export default SignIntoYourAccount
