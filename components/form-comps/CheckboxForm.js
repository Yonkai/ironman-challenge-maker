import React from 'react'
import useToggle from './hooks/useToggle.js'

const CheckboxForm = (props) => {
  const [on, toggle] = useToggle(true)
  return (
    <div>
      <h3 onClick={toggle}>{<div className='selectorArrow'>🔺</div>}{props.name}</h3>
      <div className='challenges'>
        {/* checkbox maps through dataset because that what it displays in the form
          number maps through keys. */}
        {Object.keys(props.dataset).map((objKey, index) => (
          <div key={index}>
            {/* Leave here for debugging: <div>Key: {key}, Value: {this.props.dataset[key]}</div> */}
            <input type='checkbox' id={props.dataset[objKey]} name={props.keys} value={props.dataset[objKey]}
              onChange={(event) => { props.handleChange(event) }} checked={props.rootState[props.keys + props.dataset[objKey]]}
            />
            <label htmlFor={props.dataset[objKey]}>{props.dataset[objKey]}</label>
          </div>
        )
        )}
        <input
          type='button'
          value='CLEAR_ALL'
          name={props.keys}
          onClick={(event) => { props.handleChange(event) }} />
      </div>
      <style jsx>
        {`h3{
          margin:2px;
      }
        h3:hover{
          cursor:pointer;
        }
        button{
          border:2px solid grey;
        }
        .challenges{
          display:${on ? 'flex' : 'none'};
          flex-wrap:wrap;
        }
        .selectorArrow{
          transform: rotate(${on ? '59deg' : '90deg'});
          display:inline-block;
        }
        label{
          padding:10px;
          display:inline-block;
        }
      `}
      </style>
    </div>)
}

export default CheckboxForm
