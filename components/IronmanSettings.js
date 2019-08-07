import React, { Component } from 'react'
class IronmanSettings extends Component {
  constructor (props) {
    super(props)
    this.state = { settings: null }
  }

  // TODO:control these forms in react
  render () {
    return (
      <div className='settings-main'>
        <h2>Snowflake ironman settings</h2>
        <button onClick={this.GenSet}>GEN. NEW IRONMAN</button>
        <button onClick={this.GenSet}>GEN. RANDOM IRONMAN</button>
        <button onClick={this.GenSet}>SAVE IRONMAN</button>
        <button onClick={this.GenSet}>RESET APP</button>

        <div className='area-restrictions'>
          {/* Generates object through class based on input */}
          <form action='' method='get' className='form-example'>
            <h3>Random challenges🔺</h3>
            <div className='area-challenges'>
              <label htmlFor='areas'>Add X random challenges:</label>
              <input type='number' name='areas'
                min='0' max='222' />
            </div>
            <h3>Ironman type🔺</h3>
            <div className='area-challenges'>
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
            <h3>Area challenges🔺</h3>
            <div className='area-challenges'>
              <div>
                <label htmlFor='areas'>Restrict me from GOING to X random areas (0 - 222):</label>
                <input type='number' name='areas'
                  min='0' max='222' />
              </div>
              <div>
                <label htmlFor='areas'>Restrict me from USING to X random areas (0 - 222):</label>
                <input type='number' name='areas'
                  min='0' max='222' />
              </div>
              <div>
                <label htmlFor='search-areas'>Search:</label>
                <input type='text' name='search-areas' />
              </div>
            </div>
            <h3>Combat challenges</h3>
            <h3>Skill challenges</h3>
            <h3>Minigame challenges</h3>
            <h3>Quest challenges</h3>
            <h3>Item challenges</h3>
            <h3>Beast challenges</h3>
            <h3>Slot restrictions</h3>
            <h3>Map tile restrictions</h3>
            <h3>Relativity challenges</h3>
            <h3>Food challenges</h3>
            <h3>Max Framerate</h3>
            <h3>Useable clients</h3>
            <h3>Zoom restrictions</h3>
            <h3>Compass restrictions</h3>
            <h3>Time restrictions</h3>
            <div />
          </form>

          {/* "Restrict me from using X areas", "Allow me to go to X areas" basically the same thing. */}
        </div>

        <style jsx>
          {`
                .settings-main{
                  border:3px solid black;
                  width:80%;
                  margin:5px auto;
                }

                div button{
                  margin:5px;
                  font-size:20px;
                  display:block;
                  background:white;
                  border:3px solid red;
                  display:inline;
                }

                .area-restrictions{
                  margin:5px;
                  border:3px solid black;
                }
                form div{
                  margin:5px;
                }
                .area-challenges{
                  border:3px solid black;
                  margin:5px;
                  padding:10px;
                }
          `}
        </style>
      </div>)
  }
}

export default IronmanSettings
