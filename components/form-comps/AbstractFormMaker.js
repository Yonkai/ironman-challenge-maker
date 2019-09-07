import React, { Component } from 'react'
import RadioForm from './RadioForm'
import NumberForm from './NumberForm'

class AbstractFormMaker extends Component {
  render () {
    let generatedForm
    if (this.props.abstractFormType === 'radio') {
      generatedForm = <RadioForm
        name={this.props.name}
        handleChange={this.props.handleChange}
        dataset={this.props.dataset}
        keys={this.props.keys}
        search={this.props.search}
      />
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
