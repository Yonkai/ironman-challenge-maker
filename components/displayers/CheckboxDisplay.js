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
          <ul>{<div className='iconGroup'>🔺🔒🔄❌👁️</div>}{this.props.name}</ul>
          {this.props.rootState[`${this.props.isolatedSTATE_KEYS}`]
            ? this.props.rootState[`${this.props.isolatedSTATE_KEYS}`].map((item, index) =>
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
           font-size:14px;
         }
       `}
        </style>
      </div>
    )
  }
}

export default CheckboxDisplay
