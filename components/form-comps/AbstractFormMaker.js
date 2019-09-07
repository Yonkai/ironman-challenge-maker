import React, { Component } from 'react'
import STATE_KEYS from '../../data/STATE_KEYS.js'
import challenges from '../../data/challenges.js'

class AbstractFormMaker extends Component {
  constructor (props) {
    super(props)
    this.state = { nothingYet: '' }
  }

  render () {
    let generatedForm
    if (this.props.abstractFormType === 'radio') {
      generatedForm = <p>Red</p>
    } else if (this.props.abstractFormType === 'number') {
      generatedForm = <p>blue</p>
    } else {
      generatedForm = <p>Something went wrong</p>
      console.error('An error has occured with rendering the form.')
    }
    return (
      <div className='abstractForm'>
        {generatedForm}
        <style jsx>{``}
        </style>
      </div>
    )
  }
}

export default AbstractFormMaker
