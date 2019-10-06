import React, { Component } from 'react'
import DisplayerLayoutHeader from '../../styles/DisplayerLayoutHeader.js'

class CheckboxDisplay extends Component {
  render () {
    console.log(this.props.isolatedSTATE_KEYS)
    console.log(this.props.rootState)
    console.log(this.props.rootState[`${this.props.isolatedSTATE_KEYS}`])
    return (
      <div>
        <DisplayerLayoutHeader />
        <div>
          <ul>{`🔺🔒🔄❌👁️${this.props.name}: `}</ul>
          {this.props.rootState[`${this.props.isolatedSTATE_KEYS}`]
            ? this.props.rootState[`${this.props.isolatedSTATE_KEYS}`].map((item, index) =>
              <ul><li>{`🔒🔄❌👁️${item}`}</li></ul>
            ) : ''
          }
        </div>
      </div>
    )
  }
}

export default CheckboxDisplay
