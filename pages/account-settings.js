import React from 'react'
import { signUp } from '../styles/pageSpecificStyles.js'
import RequestPasswordReset from '../components/account-auth-permissions/RequestPasswordReset'
import SignIntoYourAccount from '../components/account-auth-permissions/SignIntoYourAccount'
import SignUpForAccount from '../components/account-auth-permissions/SignUpForAccount'
import RestrictedResourcesGate from '../components/account-auth-permissions/RestrictedResourcesGate'

const SignupPage = (props) => {
  return (
    <section>
      <RequestPasswordReset />
      <SignUpForAccount />
      <SignIntoYourAccount />
      {/* Unrefined gated component, these are just here for testing/demonstration. */}
      {/* Shows when you are not signed in: */}
      <hr/>
      {/* <RestrictedResourcesGate signedUp={false}><p style={{ color: 'red' }}>This tea sure is good! I hope someone with an account doesn't break into my home.</p></RestrictedResourcesGate> */}
      {/* When you are already signed in: */}
      {/* <RestrictedResourcesGate signedUp><p style={{ color: 'red' }}>You got past the gate by being signed into your account! Guards, arrest this man! Quickly, before he pillages all the interesting parts of the application by being signed in!</p></RestrictedResourcesGate> */}

      <style jsx global>
        {
          `.RequestPasswordReset,
          .SignUpForAccount,
          .SignIntoYourAccount{
            border:2px solid rgba(220,220,220,1);
            background-color:rgba(240,240,240,1);
            margin:10px;
          }`
        }
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
