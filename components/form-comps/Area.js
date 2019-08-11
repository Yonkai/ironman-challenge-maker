import areaModifier from '../modifiers/areaModifier.js'

const Area = (props) => {
  return (
    <div>
      <form >
        <label>
          AREA - THIS IS A TEST!!!!:
          <input type='text' name='area' value={props.area} onChange={(event) => props.handleChange('modarea', areaModifier, event)} />
        </label>
      </form>
      <style jsx>
        {`
            div{
                border:10px solid green;
            }
          `}
      </style>
    </div>
  )
}

export default Area
