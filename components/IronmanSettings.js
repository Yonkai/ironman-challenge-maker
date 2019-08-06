import React, { Component } from 'react'
class IronmanSettings extends Component {
  constructor (props) {
    super(props)
    this.state = { settings: null }
  }

  render () {
    return (
      <div className='settings-main'>
        <h2>Snowflake ironman settings</h2>
        <div className='area-restrictions'>
          {/* Generates object through class based on input */}
          <h3>Area challenges</h3>
          <form action='' method='get' class='form-example'>

            <div>
              <label for='areas'>Restrict me from GOING to X areas (0 - 222):</label>
              <input type='number' name='areas'
                min='0' max='222' />
            </div>

            <div>
              <label for='areas'> Restrict me from USING to X areas (0 - 222):</label>
              <input type='number' name='areas'
                min='0' max='222' />
            </div>
          </form>

          {/* "Restrict me from using X areas", "Allow me to go to X areas" basically the same thing. */}
        </div>

        <button onClick={this.GenereatedChallenge}>GEN. NEW IRONMAN</button>
        <style jsx>
          {`
                .settings-main{
                  border:3px solid black;
                  width:80%;
                  margin:5px auto;
                }

                button{
                  margin:5px;
                  font-size:20px;
                  display:block;
                  background:white;
                }

                .area-restrictions{
                  margin:5px;
                  border:3px solid black;
                }
                form div{
                  margin:5px;
                }
          `}
        </style>
      </div>)
  }
}

export default IronmanSettings
