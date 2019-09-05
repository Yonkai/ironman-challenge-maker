import challenges from '../challenges.js'
import STATE_KEYS from '../STATE_KEYS.js'
const areapushpop = () => {
  // sanity test
  console.log(this)

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

export default areapushpop
