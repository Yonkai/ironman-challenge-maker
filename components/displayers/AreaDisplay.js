import STATE_KEYS from '../../STATE_KEYS.js'
import challenges from '../../challenges.js'
import React, { Component } from 'react'

class AreaDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      areaGo: [],
      areaUse: []
    }
    this.getAreaFromChallenges = this.getAreaFromChallenges.bind(this)
  }

  getAreaFromChallenges (goingOrUsing, action) {
    if (goingOrUsing === 'Go') {

    } else {

    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.rootState[STATE_KEYS.AREA.GOING_AREA] !== prevProps.rootState[STATE_KEYS.AREA.GOING_AREA]) {
      // Shuffle array of areas
      const shuffled = challenges.areas.sort(() => 0.5 - Math.random())

      // figure out how much to add or remove from state array
      const shift = this.props.rootState[STATE_KEYS.AREA.GOING_AREA] - prevProps.rootState[STATE_KEYS.AREA.GOING_AREA]

      // Select item from shuffled array
      const usedSelected = shuffled.slice(0, 1)

      if (shift > 0) {
        // Add shuffled item to end of state, not very efficient
        this.setState((state, props) => ({
          areaGo: [...this.state.areaGo, (usedSelected[0])]
        }))
      } else if (shift < 0) {
        var poppedState = this.state.areaGo
        poppedState.pop()
        this.setState((state, props) => ({
          areaGo: [...poppedState]
        }))
      }
    }

    if (this.props.rootState[STATE_KEYS.AREA.USING_AREA] !== prevProps.rootState[STATE_KEYS.AREA.USING_AREA]) {
      // Shuffle array of areas
      const reshuffled = challenges.areas.sort(() => 0.5 - Math.random())

      // figure out how much to add or remove from state array
      const shift = this.props.rootState[STATE_KEYS.AREA.USING_AREA] - prevProps.rootState[STATE_KEYS.AREA.USING_AREA]

      // Select item from shuffled array
      const usingSelected = reshuffled.slice(0, 1)
      if (shift > 0) {
        // Add shuffled item to end of state, not very efficient
        this.setState((state, props) => ({
          areaUse: [...this.state.areaUse, (usingSelected[0])]
        }))
      } else if (shift < 0) {
        var repoppedState = this.state.areaUse
        repoppedState.pop()
        this.setState((state, props) => ({
          areaUse: [...repoppedState]
        }))
      }
    }
  }
  //   // TODO:Make stateful, storing in this comp., so you can compare previous state
  //   // in order to implete add lock/remove lock/refresh challenge/delete challenge
  //   // and abstract that functionallity for the rest of the challenge forms with a HOC/render prop.

  //   // Also TODO, add reducer to manage state???

  //   // Managing state notes: 'Control' these components'
  //   // state through pushing/popping from a state array, and upon generation,
  //   // add to the jsx a function for each mutation type that takes that id as an argument
  //   // so that those functions can mutate state in this component after being bound to the component
  //   // implement custom logic on top of that for each component when needed, like handling the 'ul' section
  //   // and when to reject a mutation function call. Might to use .call/.apply/.bind to rebound this?

  // OLD CODE:
  //   // Shuffle array
  //   const shuffled = challenges.areas.sort(() => 0.5 - Math.random())

  //   // Get sub-array of first n elements after shuffled
  //   const goingSelected = shuffled.slice(0, props.rootState[STATE_KEYS.AREA.GOING_AREA] ? props.rootState[STATE_KEYS.AREA.GOING_AREA] : 0)

  //   // Reshuffle array
  //   const reshuffled = challenges.areas.sort(() => 0.5 - Math.random())

  //   // Get sub-array of first n elements after reshuffle
  //   const usingSelected = reshuffled.slice(0, props.rootState[STATE_KEYS.AREA.USING_AREA] ? props.rootState[STATE_KEYS.AREA.USING_AREA] : 0)

  render () {
    console.log(this.state.areaGo, this.state.areaUse)
    return (
      <div>

        <ul>
          {`🔒🔓🔄❌Area Challenges: You are restricted from going to these
        ${this.props.rootState[STATE_KEYS.AREA.GOING_AREA] ? this.props.rootState[STATE_KEYS.AREA.GOING_AREA] : 0}  areas:`}
          {this.state.areaGo.map((area, index) =>
            <li key={index}>{`🔒🔓🔄❌ ${area}`}</li>
          )}
        </ul>
        {/* Use this?props.rootState[STATE_KEYS.AREA.GOING_AREA] || 0 */}
        <ul>
          {`🔒🔓🔄❌Area Challenges: You are restricted from using these
        ${this.props.rootState[STATE_KEYS.AREA.USING_AREA] ? this.props.rootState[STATE_KEYS.AREA.USING_AREA] : 0}  areas:`}
          {this.state.areaUse.map((area, index) =>
            <li key={index + 1000}>{`🔒🔓🔄❌ ${area}`}</li>
          )}
        </ul>

        <style jsx>{`
              p{
                color:white;
                font-size:20px;
                margin:5px;
              }
              li{
                color:white;
                font-size:22px;
                margin-left:40px;
              }
              ul{
                color:lightgreen;
                font-size:24px;
                margin:0;
                padding:0;
              }
              `}
        </style>
      </div>
    )
  }
}

export default AreaDisplay
