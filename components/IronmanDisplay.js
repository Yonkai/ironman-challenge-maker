import React, { Component } from 'react'

// Abstract Displayer
import AbstractDisplayMaker from './displayers/AbstractDisplayMaker'

class IronmanDisplayChallenges extends Component {
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
          name={'Useable Clients'}
          displayType={'radio'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.clients}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.CLIENT_TYPE}
        />

        <AbstractDisplayMaker
          name={'Zoom Restrictions'}
          displayType={'radio'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.zoom}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.ZOOM_TYPE}
        />

        <AbstractDisplayMaker
          name={'Compass Restrictions'}
          displayType={'radio'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.compass}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.COMPASS_RESTRICTION}
        />

        <AbstractDisplayMaker
          intro0={'Your Going Area Restrictions:'}
          intro1={'Your Using Area Restrictions:'}
          displayType={'randomSearch'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.areas}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.AREA}
        />

        <AbstractDisplayMaker
          intro0={'Your Skill Restrictions:'}
          intro1={''}
          displayType={'randomSearch'}
          rootState={this.props.rootState}
          isolatedChallenges={this.props.challenges.skills}
          isolatedSTATE_KEYS={this.props.STATE_KEYS.SKILLS}
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
