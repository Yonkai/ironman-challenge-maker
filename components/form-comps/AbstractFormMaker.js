import React, { Component } from 'react'
import RadioForm from './RadioForm'
import NumSearchForm from './NumSearchForm'

class AbstractFormMaker extends Component {
  render () {
    let generatedForm
    if (this.props.abstractFormType === 'radio') {
      generatedForm = <RadioForm
        name={this.props.name}
        handleChange={this.props.handleChange}
        dataset={this.props.dataset}
        keys={this.props.keys}
      />
    } else if (this.props.abstractFormType === 'numSearch') {
      generatedForm = <NumSearchForm
        name={this.props.name}
        handleChange={this.props.handleChange}
        dataset={this.props.dataset}
        keys={this.props.keys}
        search={this.props.search}
      />
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
