import STATE_KEYS from '../../STATE_KEYS.js'
import DisplayerLayoutHeader from '../../DisplayerLayoutHeader.js'

const IronmanTypeDisplay = (props) => {
  return (
    <div>
      <DisplayerLayoutHeader />

      <ul>
        {`🔒🔓🔄❌Ironman Type: `}
        <span>
          {props.rootState[STATE_KEYS.IRONMAN_TYPE] ? props.rootState[STATE_KEYS.IRONMAN_TYPE] : ''}
        </span>
      </ul>

      {/* For additions on top of global styles in imported DisplayerLayoutHeader component: */}
      <style jsx>{``}
      </style>
    </div>
  )
}

export default IronmanTypeDisplay
