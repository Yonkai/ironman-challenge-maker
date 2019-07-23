import React, { Component } from 'react'
import challenges from '../challenges.js'

class IronmanChallengeRoot extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isCombatType: null,
      isAreaRestrictedTo: null
    }

    this.GenereatedChallenge = this.GenereatedChallenge.bind(this)
  }

  getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  GenereatedChallenge () {
    for (var key in challenges) {
      console.log(`You can use only ${challenges[key][this.getRandomInt(challenges[key].length)]}`)
    }
  }

  render () {
    return (
      <div>
        <h1>OSRS-Ironman-Challenge-Generator</h1>
        <div>
          <p>You currently have no challenge generated</p>
        </div>
        <section>
          <p>
          How many restrictions would you like?
          </p>

        </section>
        <button onClick={this.GenereatedChallenge}>generate random challenge</button>
        <style jsx global>
          {`
                body,html{
                    margin:0;
                    background:black;
                    color:#FFE;
                }
                h1{
                    text-decoration:underline;
                }
                section{
                  border:2px solid #FFB;
                }
          `}
        </style>
      </div>
    )
  }
}

export default IronmanChallengeRoot
