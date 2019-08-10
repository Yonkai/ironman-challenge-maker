const Area = (props) => {
  return (
    <div>
      <form >
        <label>
          AREA - THIS IS A TEST!!!!:
          <input type='text' name='area' value={props.area} onChange={props.handleChange} />
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
