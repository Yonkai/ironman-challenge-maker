import areaModifier from '../preModifiers/areaModifier.js'
import STATE_KEYS from '../../STATE_KEYS.js'

const Area = (props) => {
  return (
    <div>
      {/* <label>
          !!!TEST INPUT!!!
        <input type='text' name='area' value={props.area} onChange={(event) => props.handleChange('modArea', areaModifier, event)} />
      </label> */}
      <h3>Area challenges🔺</h3>
      <div className='challenges'>
        <div>
          <label htmlFor={STATE_KEYS.AREA.GOING_AREA}>Restrict me from GOING to X random areas (0 - 222):</label>
          <input type='number' name={STATE_KEYS.AREA.GOING_AREA}
            min='0' max='222' onChange={(event) => props.handleChange(STATE_KEYS.AREA.GOING_AREA_MOD, areaModifier, event)} />
        </div>
        <div>
          <label htmlFor={STATE_KEYS.AREA.USING_AREA}>Restrict me from USING to X random areas (0 - 222):</label>
          <input type='number' name={STATE_KEYS.AREA.USING_AREA}
            min='0' max='222' onChange={(event) => props.handleChange(STATE_KEYS.AREA.USING_AREA_MOD, areaModifier, event)} />
        </div>
        <div>
          <label htmlFor={STATE_KEYS.AREA.SEARCH_AREA}>Search:</label>
          <input type='text' name={STATE_KEYS.AREA.SEARCH_AREA} onChange={(event) => props.handleChange(STATE_KEYS.AREA.SEARCH_AREA_MOD, areaModifier, event)} />
        </div>
      </div>
      <style jsx>
        {``}
      </style>
    </div>
  )
}

export default Area
