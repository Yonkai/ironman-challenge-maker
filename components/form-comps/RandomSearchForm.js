import React from 'react'
import Downshift from 'downshift'
import capitalize from 'lodash/capitalize'
import replace from 'lodash/replace'
import useToggle from './hooks/useToggle.js'

const RandomSearchForm = (props) => {
  const restructuredDataSetForDownshift = Object.values(props.dataset).map(value => ({ value }))
  const [on, toggle] = useToggle(true)

  return (
    <div>
      <h3 onClick={toggle}>{<div className='selectorArrow'>🔺</div>}{props.name}</h3>
      <div className='challenges'>
        {Object.keys(props.keys).map((objKey, index) => (
          <div key={index}>
            {/* WARNING: Code is setup to use 1 and -1 values specifically */}
            {/* turn these into enum/const states
                -1: remove
                1: add
                2: remove all
              */}
            <button value={1} name={props.keys[objKey]} onClick={(event) => props.handleRandomSearchChange(event, props.challengesKey)}>Add {replace(capitalize(props.keys[objKey]), '_', ' ')}</button>
            <button value={-1} name={props.keys[objKey]} onClick={(event) => props.handleRandomSearchChange(event, props.challengesKey)} >Remove {replace(capitalize(props.keys[objKey]), '_', ' ')}</button>
            <button value={2} name={props.keys[objKey]} onClick={(event) => props.handleRandomSearchChange(event, props.challengesKey)} >Remove All {replace(capitalize(props.keys[objKey]), '_', ' ')}</button>
          </div>))}
        <Downshift
          onChange={(selection) => {
            console.log(selection)
            // fake syntax to simulate  click event
            const fakeClickEvent = {
              target: {
                name: Object.keys(props.keys),
                overrideSampling: selection['value'],
                value: '1'
              }
            }
            props.handleRandomSearchChange(fakeClickEvent, props.challengesKey)
          }}

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
          h3{
            margin:2px;
          }
          h3:hover{
            cursor:pointer;
          }

          .challenges{
            display:${on ? 'inherit' : 'none'}
          }

          .selectorArrow{
            transform: rotate(${on ? '59deg' : '90deg'});
            display:inline-block;
          }
          `}
      </style>
    </div>)
}

export default RandomSearchForm
