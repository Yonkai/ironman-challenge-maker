import React, { Component } from 'react'
import AbstractFormMaker from './form-comps/AbstractFormMaker.js'
// import Area from './form-comps/Area.js'
// import IronmanType from './form-comps/IronmanType.js'

class IronmanSettings extends Component {
  // TODO: Add a pull out menu in shell design from google for the forms on mobile?
  render () {
    return (
      <div className='settings-main'>
        {/* TODO: Add to side bar: */}
        {/* <button onClick={this.GenSet}>GEN. RANDOM IRONMAN</button>
        <button onClick={this.GenSet}>SAVE IRONMAN</button>
        <button onClick={this.GenSet}>RESET FORMS</button> */}

        <div className='restrictions'>
          <AbstractFormMaker
            name={'Ironman Type'}
            handleChange={this.props.handleChange}
            abstractFormType={'radio'}
            dataset={this.props.challenges.type}
            keys={this.props.STATE_KEYS.IRONMAN_TYPE}
          />

          <AbstractFormMaker
            name={'Useable Clients'}
            handleChange={this.props.handleChange}
            abstractFormType={'radio'}
            dataset={this.props.challenges.clients}
            keys={this.props.STATE_KEYS.CLIENT_TYPE}
          />

          <AbstractFormMaker
            name={'Zoom Restrictions'}
            handleChange={this.props.handleChange}
            abstractFormType={'radio'}
            dataset={this.props.challenges.zoom}
            keys={this.props.STATE_KEYS.ZOOM_TYPE}
          />

          <AbstractFormMaker
            name={'Compass Restrictions'}
            handleChange={this.props.handleChange}
            abstractFormType={'radio'}
            dataset={this.props.challenges.compass}
            keys={this.props.STATE_KEYS.COMPASS_RESTRICTION}
          />

          <AbstractFormMaker
            name={'Area Challenges'}
            handleChange={this.props.handleChange}
            abstractFormType={'randomSearch'}
            dataset={this.props.challenges.areas}
            keys={this.props.STATE_KEYS.AREA}
            search
          />

          {/* <form action='' method='get' className='form-example'>
            <h3>Random challenges🔺</h3>
            <div className='challenges'>
            <label htmlFor='areas'>Add X random challenges:</label>
            <input type='number' name='areas'
            min='0' max='222' />
          </div> */}
          {/* </form> */}

          {/* <IronmanType handleChange={this.props.handleChange} />
          <Area handleChange={this.props.handleChange} /> */}

          {/* Options<6, using radio, over that using number select with search */}
          <h3>Skill challenges - random/search</h3>
          <h3>Minigame challenges - random/search</h3>
          <h3>Quest challenges - random/search</h3>
          <h3>Item challenges random/search</h3>
          <h3>Beast challenges random/search</h3>
          <h3>Food challenges - random/search</h3>
          <h3>Spells - random/search</h3>
          <h3>Useable biomes - checkbox</h3>
          <h3>Combat challenges - checkbox</h3>
          <h3>Slot restrictions - checkbox</h3>
          <h3>Time restrictions - date</h3>
          <h3>Updates between date range - date</h3>
          <h3>Map tile restrictions - num/search/custom</h3>
          <h3>Relativity challenges - custom</h3>
          <h3>Max Framerate - num only</h3>
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
