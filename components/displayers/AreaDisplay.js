import STATE_KEYS from '../../STATE_KEYS.js'

const AreaDisplay = (props) => {
  return (
    <div>

      <p>{`❌Area Challenge: You are restricted from going to 
      ${props.rootState[STATE_KEYS.AREA.USING_AREA]} areas`}</p>

      <p>{`❌Area Challenge: You are restricted from using
      ${props.rootState[STATE_KEYS.AREA.GOING_AREA]} areas`}</p>
      {/* extract this: */}
      <style jsx>{`
            p{
              color:white;
              font-size:20px;
              margin:5px;
            `}
      </style>
    </div>
  )
}

export default AreaDisplay
