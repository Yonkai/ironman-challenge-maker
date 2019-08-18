import areaModifier from '../modifiers/areaModifier.js'
import STATE_KEYS from '../../STATE_KEYS.js'

const IronmanType = (props) => {
  return (
    <div>
      <h3>Ironman type🔺</h3>
      <div className='challenges'>
        <div>
          <input type='radio' id='huey' name='drone' value='Ironman' />
          <label htmlFor='huey'>Ironman</label>
        </div>

        <div>
          <input type='radio' id='dewey' name='drone' value='Hardcore Ironman' />
          <label htmlFor='dewey'>Hardcore Ironman</label>
        </div>

        <div>
          <input type='radio' id='louie' name='drone' value='Ultimate Ironman' />
          <label htmlFor='louie'>Ultimate Ironman</label>
        </div>

        <div>
          <input type='radio' id='random' name='drone' value='random' />
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
