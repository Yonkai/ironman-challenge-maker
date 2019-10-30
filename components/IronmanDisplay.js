import React, { Component } from 'react'

// Abstract Displayer
import AbstractDisplayMaker from './displayers/AbstractDisplayMaker'

class IronmanDisplayChallenges extends Component {
  // add menu state and function here.. or better yet root I guess because i might store in cookies later :DELETE
  // UPDATE: After further research, hooks are probably better https://github.com/beizhedenglong/react-hooks-lib
  render () {
    return (<div className='challengeDisplay'>
      {/* Ironman challenge condition: */}
      <div className='challenge-list'>

        <AbstractDisplayMaker
          name={'Ironman Type'}
          displayType={'radio'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.type}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.IRONMAN_TYPE}
        />

        <AbstractDisplayMaker
          name={'Clients'}
          displayType={'radio'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.clients}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.CLIENT_TYPE}
        />

        <AbstractDisplayMaker
          name={'Zooming'}
          displayType={'radio'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.zoom}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.ZOOM_TYPE}
        />

        <AbstractDisplayMaker
          name={'Compass'}
          displayType={'radio'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.compass}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.COMPASS_RESTRICTION}
        />

        <AbstractDisplayMaker
          intro0={'Beasts:'}
          displayType={'randomSearch'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.beasts}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.BEASTS}
        />

        <AbstractDisplayMaker
          intro0={'Items:'}
          displayType={'randomSearch'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.items}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.ITEMS}
        />

        <AbstractDisplayMaker
          intro0={'Useable Areas:'}
          displayType={'randomSearch'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.areas}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.USING_AREA}
        />

        <AbstractDisplayMaker
          intro0={'Goable Areas:'}
          displayType={'randomSearch'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.areas}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.GOING_AREA}
        />

        <AbstractDisplayMaker
          intro0={'Skills:'}
          displayType={'randomSearch'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.skills}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.SKILLS}
        />

        <AbstractDisplayMaker
          intro0={'Minigames:'}
          displayType={'randomSearch'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.minigames}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.MINIGAMES}
        />

        <AbstractDisplayMaker
          intro0={'Quests:'}
          displayType={'randomSearch'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.quests}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.QUESTS}
        />

        <AbstractDisplayMaker
          intro0={'Spells:'}
          displayType={'randomSearch'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.spells}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.SPELLS}
        />

        <AbstractDisplayMaker
          intro0={'Potions:'}
          displayType={'randomSearch'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.potions}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.POTIONS}
        />
        <AbstractDisplayMaker
          name={'Biomes'}
          displayType={'checkbox'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.biomes}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.BIOMES}
        />

        <AbstractDisplayMaker
          name={'Slots'}
          displayType={'checkbox'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.slots}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.SLOTS}
        />

        <AbstractDisplayMaker
          name={'Combat'}
          displayType={'checkbox'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.combat}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.COMBAT}
        />

        <AbstractDisplayMaker
          name={'Food'}
          displayType={'checkbox'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.food}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.FOOD}
        />

      </div>
      {/* TODO: Update LAME UI for forms/display... this is a total pain to use. */}
      <style jsx>
        {`
            p{
              color:white;
              font-size:20px;
              margin:5px;
            }
            h2{
              text-align:center;
            }
            div{
              border:3px solid black;
              margin:5px auto;
            }
            
            .challenge-list{
              height:100vh;
            }
            
            .challengeDisplay{
              border:1px solid black;
              margin:0;
              box-sizing:border-box;
              overflow-y: scroll;
              grid-area:display;
              background:black; 
            }

            .challengeDisplay::-webkit-scrollbar {
              width: 1em;
          }
            .challengeDisplay::-webkit-scrollbar-track {
                -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            }
            .challengeDisplay::-webkit-scrollbar-thumb {
              background-color: darkblue;
              outline: 1px solid darkblue;
            }
            
            //tablet
            @media only screen and (max-width: 850px) {
              .challengeDisplay{
                border:1px solid black;
                margin:0;
                box-sizing:border-box;
                grid-area:display;
              }

              .challenge-list{
                min-height:320px;
              }
            }
            
            //mobile
            @media only screen and (max-width: 475px) {
              .challengeDisplay{
                border:1px solid black;
                margin:0;
                box-sizing:border-box;
                grid-area:display;
                overflow-y: scroll;
              }
            }
          `}
      </style>
    </div>
    )
  }
}

export default IronmanDisplayChallenges
