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
      <div className='containerMain'>
        <div className='navMenu' />
        <IronmanDisplayChallenges
          rootState={this.state}
        />

        <IronmanSettings
          handleChange={this.handleChange}
        />

        <style jsx global>
          {`
                body,html{
                    margin:0;
                }
                body{
                  height:100%;
                }

                .containerMain{
                  display:grid;
                  grid-template-columns: 200px 1fr 400px;
                  align-items:start;
                  justify-items:start;
                  grid-template-areas:" nav forms display";
                }
                .navMenu{
                  background:red;
                  grid-area:nav;
                  width:100%;
                  height:1000px;
                }

                @media only screen and (max-width: 800px) {
                  .containerMain{
                  grid-template-areas:
                              "forms"
                              "display";
                  }
                }
          `}
        </style>
      </div>
    )
  }
}

export default IronmanChallengeRoot
