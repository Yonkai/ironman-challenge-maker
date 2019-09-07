import React, { Component } from 'react'

// Displayers
import AreaDisplay from './displayers/AreaDisplay'
import IronmanTypeDisplay from './displayers/IronmanTypeDisplay'

class IronmanDisplayChallenges extends Component {
  render () {
    return (<div className='challengeDisplay'>
      {/* Ironman challenge condition: */}
      <div className='challenge-list'>
        {/* TODO: Make them removeable once generate to manually weed out conflicts */}
        {/* <p>🔒🔓🔄❌Combat challenge: You can only use melee and ranged combat</p>
        <p>🔒🔓🔄❌Quest challenge: You cannot do Black Knights Fortress</p>
        <p>🔒🔓🔄❌Skill challenge: You cannnot use Hunter</p>
        <p>🔒🔓🔄❌NPC challenge: You cannot kill goblins</p>
        <p>🔒🔓🔄❌Item Challenge: You cannot use needles or buckets</p> */}
        <IronmanTypeDisplay
          rootState={this.props.rootState}
        />
        <AreaDisplay
          rootState={this.props.rootState}
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
