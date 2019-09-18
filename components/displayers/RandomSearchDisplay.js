import React, { Component } from 'react'
import DisplayerLayoutHeader from '../../styles/DisplayerLayoutHeader.js'
import STATE_KEYS from '../../data/STATE_KEYS.js'
class RandomSearchDisplay extends Component {
  render () {
    console.log(`${this.props.isolatedSTATE_KEYS[Object.keys(this.props.isolatedSTATE_KEYS)[0]] + STATE_KEYS.COMPOSITE_KEY_HALFS._CHALLENGE_INVENTORY}`)
    return (
      <div>
        <DisplayerLayoutHeader />
        <div>
          {/* Make anything over 3 properties seperate component or nest map otherwise */}
          <ul>{`🔒🔄❌👁️${this.props.intro0}`}</ul>
          {this.props.rootState[`${this.props.isolatedSTATE_KEYS[Object.keys(this.props.isolatedSTATE_KEYS)[0]] + STATE_KEYS.COMPOSITE_KEY_HALFS._CHALLENGE_INVENTORY}`]
            ? this.props.rootState[`${this.props.isolatedSTATE_KEYS[Object.keys(this.props.isolatedSTATE_KEYS)[0]] + STATE_KEYS.COMPOSITE_KEY_HALFS._CHALLENGE_INVENTORY}`].map((area, index) =>
              <ul><li>{`${area}`}</li></ul>
            ) : 0
          }

          <ul>{`🔒🔄❌👁️${this.props.intro1}`}</ul>
          {this.props.rootState[`${this.props.isolatedSTATE_KEYS[Object.keys(this.props.isolatedSTATE_KEYS)[1]] + STATE_KEYS.COMPOSITE_KEY_HALFS._CHALLENGE_INVENTORY}`]
            ? this.props.rootState[`${this.props.isolatedSTATE_KEYS[Object.keys(this.props.isolatedSTATE_KEYS)[1]] + STATE_KEYS.COMPOSITE_KEY_HALFS._CHALLENGE_INVENTORY}`].map((area, index) =>
              <ul>
                <li>{`${area}`}</li>
              </ul>
            ) : 0
          }
        </div>
        <style jsx>{`h2{
          color:lightgreen;
        }`}
        </style>
      </div>

    )
  }
}

export default RandomSearchDisplay
