import STATE_KEYS from '../../STATE_KEYS.js'
import challenges from '../../challenges.js'
import DisplayerLayoutHeader from '../../DisplayerLayoutHeader.js'
import React, { Component } from 'react'

class AreaDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      areaGo: [],
      areaUse: []
    }
    this.areapushpop = this.areapushpop.bind(this)
  }

  // Export to higher component?
  areapushpop (prevProps, KEY, stateToChange) {
    // Sanity test
    console.log(this, 'areapushpop')

    // Shuffle array of areas
    const reshuffled = challenges.areas.sort(() => 0.5 - Math.random())

    // figure out how much to add or remove from state array
    const shift = this.props.rootState[KEY] - prevProps.rootState[KEY]

    // Select item from shuffled array
    const Selected = reshuffled.slice(0, 1)
    if (shift > 0) {
      // Add shuffled item to end of state, not very efficient
      this.setState((state, props) => ({
        [stateToChange]: [...this.state[stateToChange], (Selected[0])]
      }))
    } else if (shift < 0) {
      var repoppedState = this.state[stateToChange]
      repoppedState.pop()
      this.setState((state, props) => ({
        [stateToChange]: [...repoppedState]
      }))
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.rootState[STATE_KEYS.AREA.GOING_AREA] !== prevProps.rootState[STATE_KEYS.AREA.GOING_AREA]) {
      this.areapushpop(prevProps, STATE_KEYS.AREA.GOING_AREA, 'areaGo')
    }

    if (this.props.rootState[STATE_KEYS.AREA.USING_AREA] !== prevProps.rootState[STATE_KEYS.AREA.USING_AREA]) {
      this.areapushpop(prevProps, STATE_KEYS.AREA.USING_AREA, 'areaUse')
    }
  }

  render () {
    return (
      <div>
        <DisplayerLayoutHeader />
        {/* DRY? */}
        <ul>
          {`🔒🔓🔄❌Area Challenges: You are restricted from going to these
        ${this.props.rootState[STATE_KEYS.AREA.GOING_AREA] ? this.props.rootState[STATE_KEYS.AREA.GOING_AREA] : 0}  areas:`}
          {this.state.areaGo.map((area, index) =>
            <li key={index}>{`🔒🔓🔄❌ ${area}`}</li>
          )}
        </ul>

        <ul>
          {`🔒🔓🔄❌Area Challenges: You are restricted from using these
        ${this.props.rootState[STATE_KEYS.AREA.USING_AREA] ? this.props.rootState[STATE_KEYS.AREA.USING_AREA] : 0}  areas:`}
          {this.state.areaUse.map((area, index) =>
            <li key={index + 1000}>{`🔒🔓🔄❌ ${area}`}</li>
          )}
        </ul>

        {/* For additions on top of global styles in imported DisplayerLayoutHeader component: */}
        <style jsx>{``}
        </style>
      </div>
    )
  }
}

export default AreaDisplay

// Notes

// TODO:Make stateful, storing in this comp., so you can compare previous state
// in order to implete add lock/remove lock/refresh challenge/delete challenge
// and abstract that functionallity for the rest of the challenge forms with a HOC/render prop.

// Also TODO, add reducer to manage state???

// Managing state notes: 'Control' these components'
// state through pushing/popping from a state array, and upon generation,
// add to the jsx a function for each mutation type that takes that id as an argument
// so that those functions can mutate state in this component after being bound to the component
// implement custom logic on top of that for each component when needed, like handling the 'ul' section
// and when to reject a mutation function call. Might to use .call/.apply/.bind to rebound this?
