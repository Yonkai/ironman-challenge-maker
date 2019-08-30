import STATE_KEYS from '../../STATE_KEYS.js'

const IronmanType = (props) => {
  return (
    <div>
      <h3>Ironman type🔺</h3>
      <div className='challenges'>
        <div>
          <input type='radio' id='ironman' name='btw' value='Ironman' />
          <label htmlFor='ironman'>Ironman</label>
        </div>

        <div>
          <input type='radio' id='hardcoreIronman' name='btw' value='Hardcore Ironman' />
          <label htmlFor='hardcoreIronman'>Hardcore Ironman</label>
        </div>

        <div>
          <input type='radio' id='ultimateIronman' name='btw' value='Ultimate Ironman' />
          <label htmlFor='ultimateIronman'>Ultimate Ironman</label>
        </div>

        <div>
          <input type='radio' id='random' name='btw' value='random' />
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
