import React, { Component } from 'react'
import Downshift from 'downshift'

class RandomSearchForm extends Component {
  render () {
    // convert structure to fit downshift npm package example structure:
    // var formatA = {0:'a',1:'b',2:'c',3:'d'};
    // to this:
    // var formatB = [{value:'a'},{value:'b'},{value:'c'},{value:'d'}]
    // (solution) Object.values(formatA).map(value => ({value}))
    const restructuredDataSetForDownshift = Object.values(this.props.dataset).map(value => ({ value }))
    console.log(restructuredDataSetForDownshift)
    return (
      <div>
        <h3>{`${this.props.name}`}<span>🔺</span></h3>
        <div className='challenges'>
          {Object.keys(this.props.keys).map((objKey, index) => (
            <div key={index}>
              {/* WARNING: Code is setup to use 1 and -1 values specifically */}
              <button value={1} name={this.props.keys[objKey]} onClick={(event) => this.props.handleRandomSearchChange(event, this.props.challengesKey)}>Add {this.props.keys[objKey]}</button>
              <button value={-1} name={this.props.keys[objKey]} onClick={(event) => this.props.handleRandomSearchChange(event, this.props.challengesKey)} >Remove {this.props.keys[objKey]}</button>
              <button value={2} name={this.props.keys[objKey]} onClick={(event) => this.props.handleRandomSearchChange(event, this.props.challengesKey)} >Remove ALL {this.props.keys[objKey]}</button>
            </div>))}
          <Downshift
            onChange={selection =>
              alert(selection ? `You selected ${selection.value}` : 'Selection Cleared')
            }

            itemToString={item => (item ? item.value : '')}
          >
            {({
              getInputProps,
              getItemProps,
              getLabelProps,
              getMenuProps,
              isOpen,
              inputValue,
              highlightedIndex,
              selectedItem
            }) => (
              <div>
                <label {...getLabelProps()}>Search: </label>
                <input {...getInputProps()} />
                <ul {...getMenuProps()}>
                  {isOpen
                    ? restructuredDataSetForDownshift
                      .filter(item => !inputValue || item.value.includes(inputValue))
                      .map((item, index) => (
                        <li
                          {...getItemProps({
                            key: item.value,
                            index,
                            item,
                            style: {
                              backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                              fontWeight: selectedItem === item ? 'bold' : 'normal'
                            }
                          })}
                        >
                          {item.value}
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            )}
          </Downshift>
        </div>
        <style jsx>
          {`button{
            margin:5px;
            border:1px solid black;
            background:white;
          }
          li{
            color:black;
          }
          `}
        </style>
      </div>)
  }
}

export default RandomSearchForm
