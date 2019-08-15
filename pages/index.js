import React, { Component } from 'react'
import IronmanDisplayChallenges from '../components/IronmanDisplayChallenges.js'
import IronmanSettings from '../components/IronmanSettings.js'

class IronmanChallengeRoot extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    // See design PSD for where this sits in reference to rest of applications
    this.handleChange = this.handleChange.bind(this)
  }

  getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  // "Modifiers" are specific to each challenge field
  handleChange (modName, challengeModifier, event) {
    const { target } = event
    const { name, value } = target
    const valueChallengeDisplayModified = challengeModifier(value)

    this.setState({
      [name]: value
    })

    this.setState({
      [modName]: valueChallengeDisplayModified
    })
  }

  render () {
    return (
      <div>
        <h1>Fantasy Ironman Creator</h1>
        <div>
          <IronmanDisplayChallenges
            rootState={this.state}
          />

          <IronmanSettings
            handleChange={this.handleChange}
          />
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
