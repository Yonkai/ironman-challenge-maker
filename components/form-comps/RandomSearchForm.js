import React, { Component } from 'react'
import size from 'lodash/size'

class RandomSearchForm extends Component {
  render () {
    const keyCount = size(this.props.dataset)
    console.log('Dataset key count: ' + keyCount)
    return (
      <div>
        <h3>{`${this.props.name}`}<span>🔺</span></h3>
        <div className='challenges'>
          {Object.keys(this.props.keys).map((objKey, index) => (
            <div key={index}>
              {/* Leave here for debugging: <div>Key: {key}, Value: {this.props.dataset[key]}</div> */}
              {/* <label htmlFor={this.props.keys[objKey]}>Random {this.props.keys[objKey]} </label> */}
              {/* <input type='number' name={this.props.keys[objKey]} min={0} max={keyCount} id={this.props.dataset[objKey]}
                onChange={(event) => this.props.handleChange(event)} /> */}
              <button value={1} name={this.props.keys[objKey]} onClick={(event) => this.props.handleChange(event)}>Add {this.props.keys[objKey]}</button>
              <button value={-1} name={this.props.keys[objKey]} onClick={(event) => this.props.handleChange(event)} >Remove {this.props.keys[objKey]}</button>
              {/* <button value={5} name={this.props.keys[objKey]} onClick={(event) => this.props.handleChange(event)} >5</button> */}
            </div>))}
          <input type='search' placeholder='Unrefined' />
        </div>
        <style jsx>
          {`button{
            margin:5px;
            border:1px solid black;
            background:white;
          }
        
          `}
        </style>
      </div>)
  }
}

export default RandomSearchForm
