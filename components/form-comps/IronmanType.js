import doNothingModifier from '../preModifiers/doNothingModifier.js'
import STATE_KEYS from '../../STATE_KEYS.js'

const IronmanType = (props) => {
  return (
    <div>
      <h3>Ironman type🔺</h3>
      <div className='challenges'>
        <div>
          <input type='radio' id='ironman' name={STATE_KEYS.IRONMAN_TYPE} value='Ironman'
            onChange={(event) => props.handleChange(STATE_KEYS.IRONMAN_TYPE, doNothingModifier, event)} />
          <label htmlFor='ironman'>Ironman</label>
        </div>

        <div>
          <input type='radio' id='hardcoreIronman' name={STATE_KEYS.IRONMAN_TYPE} value='Hardcore Ironman'
            onChange={(event) => props.handleChange(STATE_KEYS.IRONMAN_TYPE, doNothingModifier, event)} />
          <label htmlFor='hardcoreIronman'>Hardcore Ironman</label>
        </div>

        <div>
          <input type='radio' id='ultimateIronman' name={STATE_KEYS.IRONMAN_TYPE} value='Ultimate Ironman'
            onChange={(event) => props.handleChange(STATE_KEYS.IRONMAN_TYPE, doNothingModifier, event)} />
          <label htmlFor='ultimateIronman'>Ultimate Ironman</label>
        </div>

        <div>
          <input type='radio' id='random' name={STATE_KEYS.IRONMAN_TYPE} value='random'
            onChange={(event) => props.handleChange(STATE_KEYS.IRONMAN_TYPE, doNothingModifier, event)} />
          <label htmlFor='random'>Random</label>
        </div>
      </div>
      <style jsx>
        {``}
      </style>
    </div>
  )
}

export default IronmanType
