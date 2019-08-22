import React, { Component } from 'react'

// Displayers
import AreaDisplay from './displayers/AreaDisplay'

class IronmanDisplayChallenges extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='challengeDisplay'>
      {/* Ironman challenge condition: */}
      <h2>Your Ironman</h2>
      <div className='challenge-list'>
        {/* TODO: Make them removeable once generate to manually weed out conflicts */}
        {/* <p>🔒🔓🔄❌Combat challenge: You can only use melee and ranged combat</p>
        <p>🔒🔓🔄❌Quest challenge: You cannot do Black Knights Fortress</p>
        <p>🔒🔓🔄❌Skill challenge: You cannnot use Hunter</p>
        <p>🔒🔓🔄❌NPC challenge: You cannot kill goblins</p>
        <p>🔒🔓🔄❌Item Challenge: You cannot use needles or buckets</p> */}
        <AreaDisplay
          rootState={this.props.rootState}
        />

      </div>
      <div>
        <p>Manual challenge:</p>
        <input type='text' />
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
              overflow-y: scroll;
              height:700px;

            }
            div div{
              background:black;
            }

            .challengeDisplay{
              width:100%;
              border:3px solid black;
              margin:5px auto;
              grid-area:display;
              box-sizing:border-box;
            }
          `}
      </style>
    </div>
    )
  }
}

export default IronmanDisplayChallenges
