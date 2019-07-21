import React, { Component } from 'react'
import c from '../challenges.js'

class IronmanChallengeRoot extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isCombatType: null,
      isAreaRestrictedTo: null
    }

    this.newChallenge = this.newChallenge.bind(this)
  }

  newChallenge () {
    console.log('test')
    console.log(c)
  }

  render () {
    return (
      <div>
        <h1>Welcome to ironman Challenge Generator!</h1>
        <div><p>You currently have no challenge generated</p></div>
        <button onClick={this.newChallenge}>generate new challenge</button>
        <style jsx global>
          {`
                body,html{
                    margin:0;
                }
                h1{
                    color:darkblue;
                    text-decoration:underline;
          `}
        </style>
      </div>
    )
  }
}

export default IronmanChallengeRoot
