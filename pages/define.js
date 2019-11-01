import React, { Component } from 'react'
import { definitions } from '../styles/pageSpecificStyles.js'

class Define extends Component {
  render () {
    return (
      <>
        <div>
          <h1>Challenge</h1>
          <p>Description</p>
          <h1>Challenge</h1>
          <p>Description</p>
          <h1>Challenge</h1>
          <p>Description</p>
          <h1>Challenge</h1>
          <p>Description</p>
        </div>
        <style jsx>
          {`
          div{
            background:grey;
          }
          `}
        </style>
      </>
    )
  }
}

Define.getInitialProps = async function () {
  // define a prop for external stylesheet and then pass to _app,
  // where it will dynamically redefine the _app shell for each
  // page, definitely a workaround but I can't find a better
  // solution right now.
  return { overwrittenLayout: definitions }
}

export default Define
