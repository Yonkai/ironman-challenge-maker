import React, { Component } from 'react'

class CheckboxDisplay extends Component {
  render () {
    console.log(this.props.isolatedSTATE_KEYS)
    console.log(this.props.rootState)
    return (
      <div>
        <ul>
          {`🔺🔒🔄❌👁️${this.props.name}: `}
          <span>
            {`🔒🔄❌👁️${this.props.rootState[this.props.isolatedSTATE_KEYS]
              ? this.props.rootState[this.props.isolatedSTATE_KEYS].map((item, index) =>
                <ul>
                  <li>{`🔒🔄❌👁️${item}`}</li>
                </ul>
              ) : ''}`}
          </span>
        </ul>
      </div>
    )
  }
}

export default CheckboxDisplay
