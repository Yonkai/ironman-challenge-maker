import React from 'react'
import useToggle from './hooks/useToggle.js'

const RadioForm = (props) => {
  const [on, toggle] = useToggle(true)
  return (
  // Should turn this wrapper into a HOC(h3 title and div):
    <div>
      <h3 onClick={toggle}>{<div className='selectorArrow'>🔺</div>}{props.name}</h3>
      <div className='challenges'>
        {/* Radio maps through dataset because that what it displays in the form
              number maps through keys. */}
        {Object.keys(props.dataset).map((objKey, index) => (
          <div key={index}>
            {/* Leave here for debugging: <div>Key: {key}, Value: {props.dataset[key]}</div> */}
            <input type='radio' id={props.dataset[objKey]} name={props.keys} value={props.dataset[objKey]}
              onChange={(event) => props.handleChange(event)} />
            <label htmlFor={props.dataset[objKey]}>{ props.dataset[objKey]}</label>
          </div>
        )
        )}
      </div>
      <style jsx>
        {`
        h3{
           margin:2px;
        }
        h3:hover{
          cursor:pointer;
        }

        .challenges{
          display:${on ? 'flex' : 'none'}
        }
        .selectorArrow{
          transform: rotate(${on ? '59deg' : '90deg'});
          display:inline-block;
        }
          }`}
      </style>
    </div>
  )
}

export default RadioForm
