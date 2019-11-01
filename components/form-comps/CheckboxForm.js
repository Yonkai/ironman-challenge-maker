import React from 'react'
import useToggle from './hooks/useToggle.js'

const CheckboxForm = (props) => {
  const [on, toggle] = useToggle(true)
  return (
    <div>
      <h3 onClick={toggle}>{`🔺${props.name}`}</h3>
      <div className='challenges'>
        {/* checkbox maps through dataset because that what it displays in the form
          number maps through keys. */}
        {Object.keys(props.dataset).map((objKey, index) => (
          <div key={index}>
            {/* Leave here for debugging: <div>Key: {key}, Value: {this.props.dataset[key]}</div> */}
            <input type='checkbox' id={props.dataset[objKey]} name={props.keys} value={props.dataset[objKey]}
              onChange={(event) => props.handleChange(event)} />
            <label htmlFor={props.dataset[objKey]}>{props.dataset[objKey]}</label>
          </div>
        )
        )}
      </div>
      <style jsx>
        {`h3{
          margin:2px;
      }
        h3:hover{
          cursor:pointer;
        }
        .challenges{
          display:${on ? 'flex' : 'none'};
          flex-wrap:wrap;
        }
        label{
          margin:5px;
        }
      `}
      </style>
    </div>)
}

export default CheckboxForm
