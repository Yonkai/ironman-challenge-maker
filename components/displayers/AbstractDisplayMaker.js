import React, { Component } from 'react'
import STATE_KEYS from '../../data/STATE_KEYS'
import challenges from '../../challenges'

class AbstractDisplayMaker extends Component {
  constructor (props) {
    super(props)
    this.state = { nothing: '' }
  }

  render () {
    return (<div><p>Nothing</p></div>)
  }
}

export default AbstractDisplayMaker
