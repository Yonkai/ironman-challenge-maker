import React, { Component } from 'react'
import DisplayerLayoutHeader from '../../styles/DisplayerLayoutHeader.js'
import STATE_KEYS from '../../data/STATE_KEYS.js'
class RandomSearchDisplay extends Component {
  render () {
    console.log(`${this.props.isolatedSTATE_KEYS[Object.keys(this.props.isolatedSTATE_KEYS)[0]] + STATE_KEYS.COMPOSITE_KEY_HALFS._CHALLENGE_INVENTORY}`)
    return (
      <div>
        <DisplayerLayoutHeader />
        <p>Nothing</p>
        <div>

          {this.props.rootState[`${this.props.isolatedSTATE_KEYS[Object.keys(this.props.isolatedSTATE_KEYS)[0]] + STATE_KEYS.COMPOSITE_KEY_HALFS._CHALLENGE_INVENTORY}`]
            ? this.props.rootState[`${this.props.isolatedSTATE_KEYS[Object.keys(this.props.isolatedSTATE_KEYS)[0]] + STATE_KEYS.COMPOSITE_KEY_HALFS._CHALLENGE_INVENTORY}`].map((area, index) =>
              <p>{`${area}`}</p>
            ) : 0
          }
        </div>
        <style jsx>{``}
        </style>
      </div>

    )
  }
}

export default RandomSearchDisplay
