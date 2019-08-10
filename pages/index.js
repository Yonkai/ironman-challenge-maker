import React, { Component } from 'react'
import challenges from '../challenges.js'
import IronmanDisplayChallenges from '../components/IronmanDisplayChallenges.js'
import IronmanSettings from '../components/IronmanSettings.js'

class IronmanChallengeRoot extends Component {
  constructor (props) {
    super(props)
    this.state = {
      area: ''
    }
    // See design PSD for where this sits in reference to rest of applications
    this.handleChange = this.handleChange.bind(this)
  }

  getRandomInt (max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  handleChange (event) {
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div>
        <h1>Snowflake Ironman Generator</h1>
        <div>
          <IronmanDisplayChallenges />
          <IronmanSettings
            area={this.state.area}
            handleChange={this.handleChange} />
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
