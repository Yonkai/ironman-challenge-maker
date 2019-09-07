import React, { Component } from 'react'
import Area from './form-comps/Area.js'
import IronmanType from './form-comps/IronmanType.js'
import AbstractFormMaker from './form-comps/AbstractFormMaker.js'

class IronmanSettings extends Component {
  constructor (props) {
    super(props)
    this.state = { settings: null }
  }

  // TODO: Add a pull out menu in shell design from google for the forms on mobile?
  render () {
    return (
      <div className='settings-main'>
        {/* TODO: Add to side bar: */}
        {/* <button onClick={this.GenSet}>GEN. RANDOM IRONMAN</button>
        <button onClick={this.GenSet}>SAVE IRONMAN</button>
        <button onClick={this.GenSet}>RESET FORMS</button> */}

        <div className='restrictions'>
          <AbstractFormMaker handleChange={this.props.handleChange} abstractFormType={'radio'} />
          <form action='' method='get' className='form-example'>
            <h3>Random challenges🔺</h3>
            <div className='challenges'>
              <label htmlFor='areas'>Add X random challenges:</label>
              <input type='number' name='areas'
                min='0' max='222' />
            </div>

            <IronmanType handleChange={this.props.handleChange} />
            <Area handleChange={this.props.handleChange} />

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
            <h3>Useable biomes</h3>
            <h3>Spell types</h3>
            <h3>Updates to this date only</h3>

            <div />
          </form>

        </div>

        <style global jsx>
          {`
                .settings-main{
                  border:1px solid black;
                  height:100vh;
                  overflow-y:scroll;
                  grid-area:forms;
                  box-sizing:border-box;
                }
                h3{
                  font-size:24px;
                }
                div button{
                  margin:5px;
                  font-size:20px;
                  display:block;
                  background:white;
                  border:3px solid red;
                  display:inline;
                }

                .restrictions{
                  margin:5px;
                  border:3px solid black;

                }

                .challenges{
                  border:3px solid black;
                  margin:5px;
                  padding:10px;
                }

                .settings-main::-webkit-scrollbar {
                  width: 1em;
              }
                .settings-main::-webkit-scrollbar-track {
                    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
                }
                .settings-main::-webkit-scrollbar-thumb {
                  background-color: darkblue;
                  outline: 1px solid darkblue;
                }

                //tablet
                @media only screen and (max-width: 850px) {
                  .settings-main{
                    border:1px solid black;
                    height:50vh;
                    overflow-y:scroll;
                    grid-area:forms;
                    box-sizing:border-box;
                  }
                }

                @media only screen and (max-width: 475px) {
                  .settings-main{
                    border:1px solid black;
                    height:50vh;
                    overflow-y:scroll;
                    grid-area:forms;
                    box-sizing:border-box;
                  }
                }
          `}
        </style>
      </div>)
  }
}

export default IronmanSettings
