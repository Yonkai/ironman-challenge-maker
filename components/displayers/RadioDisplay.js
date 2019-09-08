import React, { Component } from 'react'

class RadioDisplay extends Component {
  render () {
    return (
      <div>
        <ul>
          {`🔒🔄❌👁️${this.props.name}: `}
          <span>
            {this.props.rootState[this.props.isolatedSTATE_KEYS] ? this.props.rootState[this.props.isolatedSTATE_KEYS] : ''}
          </span>
        </ul>
      </div>
    )
  }
}

export default RadioDisplay
