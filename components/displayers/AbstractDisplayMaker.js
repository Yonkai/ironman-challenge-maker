import React, { Component } from 'react'
import DisplayerLayoutHeader from '../../styles/DisplayerLayoutHeader.js'
import RadioDisplay from './RadioDisplay'

class AbstractDisplayMaker extends Component {
  render () {
    let generatedDisplay
    if (this.props.displayType === 'radio') {
      generatedDisplay = <RadioDisplay
        name={this.props.name}
        rootState={this.props.rootState}
        isolatedChallenges={this.props.isolatedChallenges}
        isolatedSTATE_KEYS={this.props.isolatedSTATE_KEYS}
      />
    } else {
      generatedDisplay = <p>Something went wrong.</p>
    }
    return (
      <div className='abstractDisplay'>
        <DisplayerLayoutHeader />
        {generatedDisplay}
      </div>)
  }
}

export default AbstractDisplayMaker
