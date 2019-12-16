import React, { Component } from 'react'
import DisplayerLayoutHeader from '../../styles/DisplayerLayoutHeader.js'
import STATE_KEYS from '../../data/STATE_KEYS.js'

class RandomSearchDisplay extends Component {
  render () {
    return (
      <div>
        <DisplayerLayoutHeader />
        <div>
          {/* Make anything over 3 properties seperate component or nest map otherwise */}
          <ul>
            {<div className='iconGroup'>🔺🔒🔄❌👁️</div>}{this.props.intro0}
          </ul>
          {this.props.rootState[`${this.props.isolatedSTATE_KEYS[Object.keys(this.props.isolatedSTATE_KEYS)[0]] + STATE_KEYS.COMPOSITE_KEY_HALFS._CHALLENGE_INVENTORY}`]
            ? this.props.rootState[`${this.props.isolatedSTATE_KEYS[Object.keys(this.props.isolatedSTATE_KEYS)[0]] + STATE_KEYS.COMPOSITE_KEY_HALFS._CHALLENGE_INVENTORY}`].map((item, index) =>
              <ul key={index}><li>{`🔒🔄❌👁️${item}`}</li></ul>
            ) : ''
          }
        </div>
        <style jsx>
          {`
         .iconGroup{
           display:inline-block;
         }
         .iconGroup:hover{
           cursor:pointer;
         }
         li{
           font-size:24px;
           color:white;
         }
       `}
        </style>
      </div>

    )
  }
}

export default RandomSearchDisplay
