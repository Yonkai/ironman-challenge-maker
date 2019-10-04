import React, { Component } from 'react'
import AbstractFormMaker from './form-comps/AbstractFormMaker.js'
// import Area from './form-comps/Area.js'
// import IronmanType from './form-comps/IronmanType.js'

class IronmanSettings extends Component {
  // TODO: Add a pull out menu in shell design from google for the forms on mobile?
  render () {
    return (
      <div className='settings-main'>
        {/* TODO: Add saving/loading functionally with access to a server that users can see/interact with */}

        <div className='restrictions'>
          <AbstractFormMaker
            name={'Ironman Type'}
            abstractFormType={'radio'}
            handleChange={this.props.handleChange}
            dataset={this.props.challenges.type}
            keys={this.props.STATE_KEYS.IRONMAN_TYPE}
          />

          <AbstractFormMaker
            name={'Useable Clients'}
            abstractFormType={'radio'}
            handleChange={this.props.handleChange}
            dataset={this.props.challenges.clients}
            keys={this.props.STATE_KEYS.CLIENT_TYPE}
          />

          <AbstractFormMaker
            name={'Zoom Restrictions'}
            abstractFormType={'radio'}
            handleChange={this.props.handleChange}
            dataset={this.props.challenges.zoom}
            keys={this.props.STATE_KEYS.ZOOM_TYPE}
          />

          <AbstractFormMaker
            name={'Compass Restrictions'}
            abstractFormType={'radio'}
            handleChange={this.props.handleChange}
            dataset={this.props.challenges.compass}
            keys={this.props.STATE_KEYS.COMPASS_RESTRICTION}
          />

          <AbstractFormMaker
            name={'Going Area Challenges'}
            challengesKey={'areas'}
            abstractFormType={'randomSearch'}
            keys={this.props.STATE_KEYS.GOING_AREA}
            dataset={this.props.challenges.areas}
            handleRandomSearchChange={this.props.handleRandomSearchChange}
          />

          <AbstractFormMaker
            name={'Using Area Challenges'}
            challengesKey={'areas'}
            abstractFormType={'randomSearch'}
            keys={this.props.STATE_KEYS.USING_AREA}
            dataset={this.props.challenges.areas}
            handleRandomSearchChange={this.props.handleRandomSearchChange}
          />

          <AbstractFormMaker
            name={'Skill Challenges'}
            challengesKey={'skills'}
            abstractFormType={'randomSearch'}
            keys={this.props.STATE_KEYS.SKILLS}
            dataset={this.props.challenges.skills}
            handleRandomSearchChange={this.props.handleRandomSearchChange}

          />

          <AbstractFormMaker
            name={'Minigame Challenges'}
            challengesKey={'minigames'}
            abstractFormType={'randomSearch'}
            keys={this.props.STATE_KEYS.MINIGAMES}
            dataset={this.props.challenges.minigames}
            handleRandomSearchChange={this.props.handleRandomSearchChange}
          />

          <AbstractFormMaker
            name={'Quest Challenges'}
            challengesKey={'quests'}
            abstractFormType={'randomSearch'}
            keys={this.props.STATE_KEYS.QUESTS}
            dataset={this.props.challenges.quests}
            handleRandomSearchChange={this.props.handleRandomSearchChange}
          />

          <AbstractFormMaker
            name={'Biome Type'}
            abstractFormType={'checkbox'}
            handleChange={this.props.handleChange}
            dataset={this.props.challenges.biomes}
            keys={this.props.STATE_KEYS.BIOMES}
          />

          {/* <IronmanType handleChange={this.props.handleChange} />
          <Area handleChange={this.props.handleChange} /> */}
          {/* <h3>Skill challenges - random/search</h3> */}
          <h3>Item challenges random/search</h3>
          <h3>Beast challenges random/search</h3>
          <h3>Food challenges - random/search</h3>
          <h3>Potion challenges - random/search</h3>
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
