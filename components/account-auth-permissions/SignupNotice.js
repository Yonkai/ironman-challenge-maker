import React from 'react'

const SignupNotice = () => {
  return (
    <div>
      <p> You need to make an account to use the ironman portal.</p>
      <button>Click here to signup with email</button>
      <style jsx>
        {`
            div{
                border:2px solid blue;
                background:rgba(0,0,255,.15);
            }
            p{
                color:black;
            }
        `}
      </style>
    </div>)
}

export default SignupNotice
