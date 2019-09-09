import React, { Component } from 'react'
import IronmanDisplay from '../components/IronmanDisplay'
import IronmanSettings from '../components/IronmanSettings.js'
import Link from 'next/link'
import challenges from '../data/challenges'
import STATE_KEYS from '../data/STATE_KEYS'

// New idea (Logic-and-State-Dedupping): Wipe out form-comps and displayer comps completely and replace them with
// a generic form comp. compoenent that takes in a config object to render out the two types
// of forms im working with right now, and then have another generic displayer comp that
// takes that user input from the generic forms generated and renders them out in the
// IronmanDisplayChallenges area. Business logic, view logic, and display logic are all then
// dedupped which is the goal for this branch, which should speed up development tremendously.
//
// Also, wipe out Pre-Modifier and replace with Post-Modifier which is a function in root,
// and again do the same with the mutations functions, put them in here and pass them to
// the displayer component for the User Actor to interact with. This satisfies the open-closed principle
// and SRP in SOLID. I don't think the Liskov inversion principle applies here. I don't think Interface segration is large enough of an issue
// in a relatively small program. For now. The form hiding feature can stay inside the abstract displayers because nothing depends on its state, it will be reset on each
// visit.

class IronmanChallengeRoot extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.locking = this.locking.bind(this)
    this.rerolling = this.rerolling.bind(this)
    this.visibility = this.visibility.bind(this)
    this.removing = this.removing.bind(this)
    this.openCloseForm = this.openCloseForm.bind(this)
  }

  // IronmanDisplay component methods (Interacts with root and display):
  locking () {

  }

  rerolling () {

  }

  visibility () {

  }

  removing () {

  }

  // IronmanSettings component methods (Interacts with root and forms):
  openCloseForm () {

  }

  // IronmanSettings+IronmanDisplay methods

  // Triggers a function call in numSearch

  // "Modifiers" are specific to each challenge field
  handleChange (event) {
    // Add this method to context.
    const { target } = event
    const { name, value } = target

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div className='containerMain'>
        <nav className='navMenu'>
          <Link href='#'><a>Creator</a></Link>
          <Link href='#'><a>Map Visuals</a></Link>
          <Link href='#'><a>Save Ironman</a></Link>
          <Link href='#'><a>Load Ironman</a></Link>
          <Link href='https://oldschool.runescape.com/'><a>Play OSRS</a></Link>
          <Link href='#'><a>How to Use</a></Link>
          <Link href='#'><a>Want to Contribute?</a></Link>
          <Link href='https://github.com/Yonkai/ironman-challenge-maker'><a>Github</a></Link>
        </nav>

        <IronmanDisplay
          rootState={this.state}
          challenges={challenges}
          STATE_KEYS={STATE_KEYS}
        />

        <IronmanSettings
          handleChange={this.handleChange}
          challenges={challenges}
          STATE_KEYS={STATE_KEYS}
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
