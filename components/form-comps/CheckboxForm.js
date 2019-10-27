import React, { Component } from 'react'
import toggleMenu from './toggleMenuUtil.js'

class CheckboxForm extends Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: true }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  // look into hooks to not duplicate method
  toggleMenu () {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render () {
    return (
      // Should turn this wrapper into a HOC(h3 title and div):
      <div>
        <h3 onClick={toggleMenu}>{`${this.props.name}🔺`}</h3>
        {this.state.isToggleOn
          ? <div className='challenges'>
            {/* checkbox maps through dataset because that what it displays in the form
              number maps through keys. */}
            {Object.keys(this.props.dataset).map((objKey, index) => (
              <div key={index}>
                {/* Leave here for debugging: <div>Key: {key}, Value: {this.props.dataset[key]}</div> */}
                <input type='checkbox' id={this.props.dataset[objKey]} name={this.props.keys} value={this.props.dataset[objKey]}
                  onChange={(event) => this.props.handleChange(event)} />
                <label htmlFor={this.props.dataset[objKey]}>{this.props.dataset[objKey]}</label>
              </div>
            )
            )}
          </div> : <p>hidden</p>}
        <style jsx>
          {`h3{
              margin:2px;
          }`}
        </style>
      </div>
    )
  }
}

export default CheckboxForm
