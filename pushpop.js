import challenges from './challenges.js'

const pushpop = (currentProps, prevProps, state, KEY, stateToChange) => {
  // Shuffle array of areas
  const reshuffled = challenges.areas.sort(() => 0.5 - Math.random())

  // figure out how much to add or remove from state array
  const shift = currentProps.rootState[KEY] - prevProps.rootState[KEY]

  // Select item from shuffled array
  const Selected = reshuffled.slice(0, 1)

  if (shift > 0) {
    // Add shuffled item to end of state, not very efficient
    return [...state[stateToChange], (Selected[0])]
  } else if (shift < 0) {
    var repoppedState = state[stateToChange]
    return repoppedState.pop()
  }
}

export default pushpop
