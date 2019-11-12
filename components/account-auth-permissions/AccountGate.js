import SignIntoYourAccount from './SignIntoYourAccount'

// Unrefined component
// Obviously need proper security mechanism to make this works
// like in the graphql course.
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
