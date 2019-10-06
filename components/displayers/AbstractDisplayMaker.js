import React, { Component } from 'react'
import DisplayerLayoutHeader from '../../styles/DisplayerLayoutHeader.js'
import RadioDisplay from './RadioDisplay'
import RandomSearchDisplay from './RandomSearchDisplay'
import CheckboxDisplay from './CheckboxDisplay'

// verncular use of the word 'abstract'
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
        generatedDisplay = <RandomSearchDisplay
          intro0={this.props.intro0}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.isolatedChallenges}
          isolatedSTATE_KEYS={this.props.isolatedSTATE_KEYS}
        />
        break
      case 'checkbox':
        generatedDisplay = <CheckboxDisplay
          name={this.props.name}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.isolatedChallenges}
          isolatedSTATE_KEYS={this.props.isolatedSTATE_KEYS}
        />
        break
      default:
        // TODO:Convert to try...catch...finally exception handling
        console.log('Something went wrong')
    }
    return (
      <div className='abstractDisplay'>
        <DisplayerLayoutHeader />
        {generatedDisplay}
      </div>)
  }
}

export default AbstractDisplayMaker
