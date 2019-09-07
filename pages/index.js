import React, { Component } from 'react'
import IronmanDisplayChallenges from '../components/IronmanDisplayChallenges.js'
import IronmanSettings from '../components/IronmanSettings.js'
import Link from 'next/link'

// Notes: Process to add a new challenge/field to the display component
// using Area as an example:
// 1. Make form component (Area.js)
// 2. Have form component push data though bound function to root state stored in this (index.js) component
//    threading data between a modifier function (areaModifier.js) if it exists before setting new final state.
// 3. Make displayer component (AreaDisplay.js) and render inside of (IronmanDisplayChallenges.js)
// 4. (TODO) Each displayer component keeps its own state and imports abstracted functions (mutations/<function>)
//    that allow that displayers state to be modified by either locking, unlocking, rerolling, or removing data
//    by threading through said functions. The data structure will more than likely just be simple objects but there may be more
//    advance structures in the future added, which may have different data/design flows.
// 5. (TODO) Add "random challenges" form last because it will use all other form challenges.
// 6. (TODO) Add search with downshift later which goes through the challenges data file, asssuming I don't change that
//    to an API instead.

// New idea (Logic-and-State-Dedupping): Wipe out form-comps and displayer comps completely and replace them with
// a generic form comp. compoenent that takes in a config object to render out the two types
// of forms im working with right now, and then have another generic displayer comp that
// takes that user input from the generic forms generated and renders them out in the
// IronmanDisplayChallenges area. Business logic, view logic, and display logic are all then
// dedupped which is the goal for this branch, which should speed up development tremendously.

class IronmanChallengeRoot extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    // See design PSD for where this sits in reference to rest of applications
    this.handleChange = this.handleChange.bind(this)
  }

  // "Modifiers" are specific to each challenge field
  handleChange (modName, challengeModifier, event) {
    const { target } = event
    const { name, value } = target
    const valueChallengeDisplayModified = challengeModifier(value)
    if (name !== modName) {
      this.setState({
        [modName]: valueChallengeDisplayModified
      })
    }
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div className='containerMain'>
        <nav className='navMenu'>
          <Link href='#'><a>Create</a></Link>
          <Link href='#'><a>See Map Visuals</a></Link>
          <Link href='#'><a>Save/Load Ironmen</a></Link>
          <Link href='#'><a>Other's Creations</a></Link>
          <Link href='#'><a>Github</a></Link>
          <Link href='#'><a>Cool Links</a></Link>
          <Link href='#'><a>Sources</a></Link>
          <Link href='#'><a>Play OSRS</a></Link>
          <Link href='#'><a>How to Use</a></Link>
          <Link href='#'><a>How to Contribute</a></Link>
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
                  display:inline-block;
                }

                .navMenu a{
                  display:block;
                  margin-top:20px;
                  color:white;
                  font-size:18px;
                  text-decoration:n
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
