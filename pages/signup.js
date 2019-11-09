import React, { Component } from 'react'
import { signUp } from '../styles/pageSpecificStyles.js'

class SignupPage extends Component {
  render () {
    return (
      <div>
        <p>Signup</p>
        <p>Signin</p>
        <p>Request password reset token</p>
      </div>
    )
  }
}

SignupPage.getInitialProps = async function () {
  // define a prop for external stylesheet and then pass to _app,
  // where it will dynamically redefine the _app shell for each
  // page, definitely a workaround but I can't find a better
  // solution right now.
  return { overwrittenLayout: signUp }
}

export default SignupPage
