import React, { Component } from 'react'
import RadioForm from './RadioForm'
import RandomSearchForm from './RandomSearchForm'

class AbstractFormMaker extends Component {
  render () {
    let generatedForm

    switch (this.props.abstractFormType) {
      case 'radio':
        generatedForm = <RadioForm
          name={this.props.name}
          handleChange={this.props.handleChange}
          dataset={this.props.dataset}
          keys={this.props.keys}
        />
        break
      case 'randomSearch':
        generatedForm = <RandomSearchForm
          name={this.props.name}
          handleRandomSearchChange={this.props.handleRandomSearchChange}
          dataset={this.props.dataset}
          keys={this.props.keys}
          search={this.props.search}
          challengesKey={this.props.challengesKey}
        />
        break
      default:
        console.error('Something went wrong rendering a form!')
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
