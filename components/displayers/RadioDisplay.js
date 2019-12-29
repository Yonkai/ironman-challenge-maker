import React, { Component } from 'react'

class RadioDisplay extends Component {
  render () {
    return (
      <div>
        <ul>
          {<div className='iconGroup'>🔺🔒🔄❌👁️</div>}{this.props.name}
          <span>
            {this.props.rootState[this.props.isolatedSTATE_KEYS] ? this.props.rootState[this.props.isolatedSTATE_KEYS] : ''}
          </span>
        </ul>
        <style jsx>
          {`
         .iconGroup{
           display:inline-block;
         }
         .iconGroup:hover{
           cursor:pointer;
         }
         li{
           font-size:14px;
         }
       `}
        </style>
      </div>
    )
  }
}

export default RadioDisplay
