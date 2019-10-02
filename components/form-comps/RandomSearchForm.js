import React, { Component } from 'react'

class RandomSearchForm extends Component {
  render () {
    return (
      <div>
        <h3>{`${this.props.name}`}<span>🔺</span></h3>
        <div className='challenges'>
          {Object.keys(this.props.keys).map((objKey, index) => (
            <div key={index}>
              {/* WARNING: Code is setup to use 1 and -1 values specifically */}
              <button value={1} name={this.props.keys[objKey]} onClick={(event) => this.props.handleRandomSearchChange(event, this.props.challengesKey)}>Add {this.props.keys[objKey]}</button>
              <button value={-1} name={this.props.keys[objKey]} onClick={(event) => this.props.handleRandomSearchChange(event, this.props.challengesKey)} >Remove {this.props.keys[objKey]}</button>
              <button value={2} name={this.props.keys[objKey]} onClick={(event) => this.props.handleRandomSearchChange(event, this.props.challengesKey)} >Remove ALL {this.props.keys[objKey]}</button>
            </div>))}
          <input type='search' placeholder='Unrefined' />
        </div>
        <style jsx>
          {`button{
            margin:5px;
            border:1px solid black;
            background:white;
          }`}
        </style>
      </div>)
  }
}

export default RandomSearchForm
