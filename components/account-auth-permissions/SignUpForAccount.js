import TextInputFormik from './TextInputFormik'
import { Formik, Form } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import config from '../../data/config'
import useToggle from '../form-comps/hooks/useToggle'

const SignUpForAccount = (props) => {
  const [on, toggle] = useToggle(true)
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
            .min(12, 'Password is too short - should be 12 chars minimum.')
        })}
        onSubmit={(values, { setSubmitting }) => {
          toggle()
          setTimeout( async () => {
            axios.post(`http://${config.backend_host}/auth/signup`, {
              username: values.name,
              email:values.email,
              password:values.password
            },{withCredentials:true}).then(response => {console.log(response)}).catch(err=>{console.log(err)})
            //Visual confirmation that the form is doing something, UI/UX++:
            setTimeout(()=>{toggle()},500)
            setSubmitting(false)
            // console.log(values)
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
            label='Name: '
            name='name'
            type='text'
            placeholder='Enter your name.'
          />
          <TextInputFormik
            label='Passsword: '
            name='password'
            type='password'
            placeholder='Enter your password.'
          />

          <button type='submit'>Sign Up!</button>
          <p className='visualConfirmationForFormSubmission'>Submitting...!</p>
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

export default SignUpForAccount
