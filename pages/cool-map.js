import React, { Component } from 'react'
import { coolMap } from '../styles/pageSpecificStyles.js'

class CoolMap extends Component {
  render () {
    return (
      <div>
        {/* <iframe src='https://explv.github.io' width='95%' height='95%' /> */}
        <p>How to use</p>
        <style jsx>{`
        p{
          font-size:18px;
        }
      `}</style>
      </div>
    )
  }
}

CoolMap.getInitialProps = async function () {
  // define a prop for external stylesheet and then pass to _app,
  // where it will dynamically redefine the _app shell for each
  // page, definitely a workaround but I can't find a better
  // solution right now.
  return { overwrittenLayout: coolMap }
}

export default CoolMap
