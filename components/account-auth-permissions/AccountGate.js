import SignIntoYourAccount from './SignIntoYourAccount'

// Unrefined component
const AccountGate = (props) => {
  return (
    <>
      {props.signedUp
        ? <div>{props.children}</div>
        : <div>
          <h2>Please sign into your account to access this part of the application:</h2>
          <SignIntoYourAccount />
        </div>
      }
    </>
  )
}

export default AccountGate
