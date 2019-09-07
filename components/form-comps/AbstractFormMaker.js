import React, { Component } from 'react'
import RadioForm from './RadioForm'
import NumberForm from './NumberForm'

class AbstractFormMaker extends Component {
  render () {
    let generatedForm
    if (this.props.abstractFormType === 'radio') {
      generatedForm = <RadioForm />
    } else if (this.props.abstractFormType === 'number') {
      generatedForm = <NumberForm />
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
