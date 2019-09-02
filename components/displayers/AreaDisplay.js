import STATE_KEYS from '../../STATE_KEYS.js'
import challenges from '../../challenges.js'

const AreaDisplay = (props) => {
  // TODO:Make stateful, storing in this comp., so you can compare previous state
  // in order to implete add lock/remove lock/refresh challenge/delete challenge
  // and abstract that functionallity for the rest of the challenge forms with a HOC/render prop.

  // Also TODO, add reducer to manage state???

  // Managing state notes: 'Control' these components'
  // state through pushing/popping from an array, and upon generation,
  // add to the jsx a function for each mutation type that takes that id as an argument
  // so that those functions can mutate state in this component after being bound to the component
  // implement custom logic on top of that for each component when needed, like handling the 'ul' section
  // and when to reject a mutation function call. Might to use .call/.apply/.bind to rebound this?

  // Shuffle array
  const shuffled = challenges.areas.sort(() => 0.5 - Math.random())

  // Get sub-array of first n elements after shuffled
  const goingSelected = shuffled.slice(0, props.rootState[STATE_KEYS.AREA.GOING_AREA] ? props.rootState[STATE_KEYS.AREA.GOING_AREA] : 0)

  // Reshuffle array
  const reshuffled = challenges.areas.sort(() => 0.5 - Math.random())

  // Get sub-array of first n elements after reshuffle
  const usingSelected = reshuffled.slice(0, props.rootState[STATE_KEYS.AREA.USING_AREA] ? props.rootState[STATE_KEYS.AREA.USING_AREA] : 0)

  return (
    <div>

      <ul>
        {`🔒🔓🔄❌Area Challenges: You are restricted from going to these
      ${props.rootState[STATE_KEYS.AREA.GOING_AREA] ? props.rootState[STATE_KEYS.AREA.GOING_AREA] : 0}  areas:`}
        {goingSelected.map((area, index) =>
          <li key={index}>{`🔒🔓🔄❌ ${area}`}</li>
        )}
      </ul>
      {/* Use this?props.rootState[STATE_KEYS.AREA.GOING_AREA] || 0 */}
      <ul>
        {`🔒🔓🔄❌Area Challenges: You are restricted from using these
      ${props.rootState[STATE_KEYS.AREA.USING_AREA] ? props.rootState[STATE_KEYS.AREA.USING_AREA] : 0}  areas:`}
        {usingSelected.map((area, index) =>
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

export default AreaDisplay
