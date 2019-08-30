import React, { Component } from 'react'
import IronmanDisplayChallenges from '../components/IronmanDisplayChallenges.js'
import IronmanSettings from '../components/IronmanSettings.js'

// Notes: Process to add a new challenge/field to the display component
// using Area as an example:
// 1. Make form component (Area.js)
// 2. Have form component push data though bound function to root state stored in this (index.js) component
//    threading data between a modifier function (areaModifier.js) before setting new final state.
// 3. Make displayer component (AreaDisplay.js) and render inside of (IronmanDisplayChallenges.js)
// 4. (TODO) Each displayer component keeps its own state and imports abstracted functions (mutations/<function>)
//    that allow that displayers state to be modified by either locking, unlocking, recalculating, or removing data
//    by threading through said functions. The data structure will more than likely just be simple objects but there may be more
//    advance structures in the future added, which may have different data/design flows.

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
        <nav className='navMenu'>
          <p>Create</p>
          <p>See Map Visuals</p>
          <p>Save/Load Ironmen</p>
          <p>Other's Creations</p>
          <p>Github</p>
          <p>Cool Links</p>
          <p>Sources</p>
          <p>Play OSRS</p>
          <p>How to Use</p>
          <p>How to Contribute</p>
        </nav>

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

                .containerMain{
                  display:grid;
                  grid-template-columns: 150px 3fr 5fr;
                  grid-template-areas:" nav forms display";
                  grid-gap:5px;
                  height:100vh;
                }
                .navMenu{
                  background-color:black;
                  color:white;
                  grid-area:nav;
                  height:100vh;
                }

                //tablet
                @media only screen and (max-width: 850px) {
                  .containerMain{
                    grid-template-columns: 150px 1fr;
                    grid-template-rows:1fr 1fr;
                    grid-template-areas:
                              "nav display"
                              "nav forms";
                  }
                }
                //mobile add pull-out menu?
                @media only screen and (max-width: 475px) {
                  .containerMain{
                    grid-template-columns: 1fr;
                  grid-template-areas:
                              "display"
                              "forms";
                  }
                  .navMenu{
                    display:none;
                  }
                }

          `}
        </style>
      </div>
    )
  }
}

export default IronmanChallengeRoot
