import React, { Component } from 'react'
import DisplayerLayoutHeader from '../../styles/DisplayerLayoutHeader.js'
import STATE_KEYS from '../../data/STATE_KEYS'
import challenges from '../../data/challenges'
import RadioDisplay from './RadioDisplay'

class AbstractDisplayMaker extends Component {
  render () {
    let generatedDisplay
    return (
      <div className='abstractDisplay'>
        <DisplayerLayoutHeader />
        {generatedDisplay}
      </div>)
  }
}

export default AbstractDisplayMaker
