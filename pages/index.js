import React, { Component } from 'react'
import sample from 'lodash/sample'
import difference from 'lodash/difference'
import pickBy from 'lodash/pickBy'
import startsWith from 'lodash/startsWith'
import IronmanDisplay from '../components/IronmanDisplay'
import IronmanSettings from '../components/IronmanSettings.js'
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
    this.nothinging = this.nothinging.bind(this)
    this.handleRandomSearchChange = this.handleRandomSearchChange.bind(this)
  }

  // IronmanDisplay component methods (Interacts with root and display):
  // locking, rerolling, visbility, removing, and nothinging affect the same state that is built up from
  // form interaction and that the display components that contain these methods use to display.
  locking () {

  }

  rerolling () {

  }

  visibility () {

  }

  removing () {

  }

  nothinging () {

  }

  redudancyCheck () {

  }

  // "Modifiers" are specific to each challenge field
  // TODO: Deselect all through controlled state passing down that state through checkbox
  // like in example
  handleChange (event) {
    console.log(event)
    const checkboxContainer = {}
    const { target } = event
    const { name, value, type } = target
    checkboxContainer[name + value] = target.type === 'checkbox' ? target.checked : target.value
    console.log(name, value, name + value, checkboxContainer)
    console.log(type)
    switch (type) {
      case 'checkbox':
      case 'button':
        // TODO setup controlled checkbox state

        this.setState(prevState => {
          if (value === 'CLEAR_ALL') {
            const copyingStateToFindCheckboxStates = this.state
            // filter out based on keys with loDash, using the name from the lower function invocation
            // as the key to filter by with keys being dynamically generated earlier.
            const filteringStatebasedOnKeys = pickBy(copyingStateToFindCheckboxStates, function (value, key) {
              return startsWith(key, name)
            })
            // switch values to 'clear all'
            Object.keys(filteringStatebasedOnKeys).map(function (key, index) {
              filteringStatebasedOnKeys[key] = false
            })

            // empty the array in state
            filteringStatebasedOnKeys[name] = []

            console.log(filteringStatebasedOnKeys)
            // clear all, array holding state shown in display, and the checkboxes controlled through this switch:
            // Don't know why warning say it isn't controlled?
            return filteringStatebasedOnKeys
          }
          // because Object.entries(new Date()).length === 0;
          // we have to do some additional check
          if (prevState[name] === undefined) {
            return { [name]: [value], [name + value]: checkboxContainer[name + value] }
          }
          console.log(prevState)
          // doing prevState[name].includes caused a problem precedence
          if ((prevState[name]).includes(value)) {
            // allows to keep a replica of the checkbox state
            const differencedCheckbox = difference(prevState[name], [value])
            return { [name]: [...differencedCheckbox], [name + value]: checkboxContainer[name + value] }
          } else {
            return { [name]: [...prevState[name], value], [name + value]: checkboxContainer[name + value] }
          }
        })
        break
        // TODO:ADD special case for handling group ironmen:
        // Add seperated iframes? Duplicate display and add tabs to the top
        // as a seperate display component? Save files for each? Possibilities
        // are endless make sure it follows clean architecture
      case 'radio':
        this.setState({
          [name]: value
        })
        break
      default:
        console.error('Something went wrong rendering a form!')
    }
  }

  handleRandomSearchChange (event, challengesKey) {
    console.log(challengesKey)
    const { target } = event
    const { name, value, overrideSampling } = target
    const parsedValue = parseInt(value)
    const countName = name + STATE_KEYS.COMPOSITE_KEY_HALFS._COUNT
    const challengeInventory = name + STATE_KEYS.COMPOSITE_KEY_HALFS._CHALLENGE_INVENTORY
    // TODO: Compare previous state so you don't get duplicates before pulling a sample

    // Modify to keep track of number of challenges for this RandomSearch
    this.setState(prevState => {
      // setState for counts
      // TODO: remove all breaks this but refactor if you actually end using this.
      if (prevState[countName] && (prevState[countName] > 0)) {
        return { [countName]: prevState[countName] + parsedValue }
      } else {
        return { [countName]: parsedValue === -1 ? 0 : 1 }
      }
    },
    // setState data pulled from data folder
    this.setState(prevState => {
      // Check for duplicates from previous random selects
      const restructuredChallenges = Object.keys(challenges[challengesKey]).map((key) => challenges[challengesKey][key])
      const differencedChallengesFromPrevState = difference(restructuredChallenges, prevState[challengeInventory])
      const challengeSampling = overrideSampling || sample(differencedChallengesFromPrevState)

      // parsedValue is like a really sketchy ENUM, refactor that
      if (prevState[challengeInventory] && (parsedValue === 1)) {
        var joined = prevState[challengeInventory].concat(challengeSampling)
        return { [challengeInventory]: joined }
      } else if (prevState[challengeInventory] && (parsedValue === -1)) {
        var popped = prevState[challengeInventory].length === 1 ? prevState[challengeInventory].splice() : prevState[challengeInventory].slice(0, -1)
        return { [challengeInventory]: popped }
      } else if ((!prevState[challengeInventory]) && (parsedValue === -1)) {
        // do nothing
      } else if ((!prevState[challengeInventory]) && (parsedValue === 1)) {
        return { [challengeInventory]: [challengeSampling] }
        // Remove all functionallity
      } else if ((prevState[challengeInventory]) && (parsedValue === 2)) {
        return { [challengeInventory]: [] }
      } else {
        console.error('Something went wrong with trying to modify the a random/search form!')
      }
    }))

    // TODO: ADD Specific value entered from search box
  }

  render () {
    return (
      <>
        <IronmanDisplay
          rootState={this.state}
          challenges={challenges}
          STATE_KEYS={STATE_KEYS}
          groupTab={this.state.groupTab}
        />

        <IronmanSettings
          handleChange={this.handleChange}
          handleRandomSearchChange={this.handleRandomSearchChange}
          challenges={challenges}
          STATE_KEYS={STATE_KEYS}
          rootState={this.state}
        />

        <style jsx global>
          {`
                body,html{
                  margin:0;
                }
                
                .containerMain{
                  display:grid;
                  grid-template-columns: 150px 3fr 5fr;
                  grid-template-areas:"nav forms display";
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
      </>
    )
  }
}

export default IronmanChallengeRoot
