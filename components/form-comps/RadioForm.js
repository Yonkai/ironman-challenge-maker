import React, { Component } from 'react'

class RadioForm extends Component {
  render () {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <div className='challenges'>
          {/* adio maps through dataset because that what it displays in the form
              number maps through keys. */}
          {Object.keys(this.props.dataset).map((key, index) => (
            <div>
              {/* Leave here for debugging: <div>Key: {key}, Value: {this.props.dataset[key]}</div> */}
              <input type='radio' id={this.props.dataset[key]} name={this.props.keys} value={this.props.dataset[key]}
                onChange={(event) => this.props.handleChange(event)} />
              <label htmlFor={this.props.dataset[key]}>{this.props.dataset[key]}</label>
            </div>
          )
          )}
        </div>
        <style jsx>
          {``}
        </style>
      </div>
    )
  }
}

export default RadioForm
