import React, { Component } from 'react'

class RadioForm extends Component {
  render () {
    return (
      // Should turn this wrapper into a HOC(h3 title and div):
      <div>
        <h3>{`${this.props.name}🔺`}</h3>
        <div className='challenges'>
          {/* Radio maps through dataset because that what it displays in the form
              number maps through keys. */}
          {Object.keys(this.props.dataset).map((objKey, index) => (
            <div key={index}>
              {/* Leave here for debugging: <div>Key: {key}, Value: {this.props.dataset[key]}</div> */}
              <input type='radio' id={this.props.dataset[objKey]} name={this.props.keys} value={this.props.dataset[objKey]}
                onChange={(event) => this.props.handleChange(event)} />
              <label htmlFor={this.props.dataset[objKey]}>{this.props.dataset[objKey]}</label>
            </div>
          )
          )}
        </div>
        <style jsx>
          {`h3{
              margin:2px;
          }`}
        </style>
      </div>
    )
  }
}

export default RadioForm
