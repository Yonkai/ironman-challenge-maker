import React, { Component } from 'react'
import size from 'lodash/size'

class NumSearchForm extends Component {
  render () {
    const keyCount = size(this.props.dataset)
    console.log('Dataset key count: ' + keyCount)
    return (
      <div>
        <h3>{`${this.props.name}🔺`}</h3>
        <div className='challenges'>
          {Object.keys(this.props.keys).map((objKey, index) => (
            <div key={index}>
              {/* Leave here for debugging: <div>Key: {key}, Value: {this.props.dataset[key]}</div> */}
              <label htmlFor={this.props.keys[objKey]}>{this.props.keys[objKey]}</label>
              <input type='number' name={this.props.keys[objKey]} min={0} max={keyCount} id={this.props.dataset[objKey]}
                onChange={(event) => this.props.handleChange(event)} />
            </div>
          )
          )}
        </div>
        <style jsx>
          {``}
        </style>
      </div>)
  }
}

export default NumSearchForm
