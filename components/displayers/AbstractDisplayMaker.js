import React, { Component } from 'react'
import DisplayerLayoutHeader from '../../styles/DisplayerLayoutHeader.js'
import RadioDisplay from './RadioDisplay'

class AbstractDisplayMaker extends Component {
  render () {
    let generatedDisplay

    switch (this.props.displayType) {
      case 'radio':
        generatedDisplay = <RadioDisplay
          name={this.props.name}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.isolatedChallenges}
          isolatedSTATE_KEYS={this.props.isolatedSTATE_KEYS}
        />
        break
      case 'randomSearch':
        generatedDisplay = <RadioDisplay
          name={this.props.name}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.isolatedChallenges}
          isolatedSTATE_KEYS={this.props.isolatedSTATE_KEYS}
        />
        break
      default:
        console.error('Something went wrong')
    }
    return (
      <div className='abstractDisplay'>
        <DisplayerLayoutHeader />
        {generatedDisplay}
      </div>)
  }
}

export default AbstractDisplayMaker
