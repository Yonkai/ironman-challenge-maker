import React, { Component } from 'react'
import challenges from '../challenges.js'
import IronmanChallenges from '../components/IronmanChallenges.js'
import IronmanSettings from '../components/IronmanSettings.js'

class IronmanChallengeRoot extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isCombatType: null,
      isAreaRestrictedTo: null,
      finishedChallengeText: null
    }
  }

  getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  render () {
    return (
      <div>
        <h1>Snowflake Ironman Generator</h1>
        <div>
          <IronmanChallenges />
          <IronmanSettings />
        </div>
        <section />

        <style jsx global>
          {`
                body,html{
                    margin:0;
                }

                h1{
                  text-align:center;
                }

          `}
        </style>
      </div>
    )
  }
}

export default IronmanChallengeRoot
