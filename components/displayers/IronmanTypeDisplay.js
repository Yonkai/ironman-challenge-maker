import STATE_KEYS from '../../STATE_KEYS.js'

const IronmanTypeDisplay = (props) => {
  return (
    <div>

      <ul>
        {`🔒🔓🔄❌Ironman Type: `}
        <span>
          {props.rootState[STATE_KEYS.IRONMAN_TYPE] ? props.rootState[STATE_KEYS.IRONMAN_TYPE] : ''}
        </span>
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
            span{
                color:white
            }
            `}
      </style>
    </div>
  )
}

export default IronmanTypeDisplay
