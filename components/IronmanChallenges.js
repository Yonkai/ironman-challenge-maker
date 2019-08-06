import React, { Component } from 'react'

class IronmanChallenges extends Component {
  constructor (props) {
    super(props)
    this.state = { challengeCount: null }
  }

  render () {
    return (<div>
      {/* Ironman challenge condition: */}
      <h2> Your snowflake ironman</h2>
      <p>Combat challenge: You can only use melee and ranged combat</p>
      <p>Quest challenge: You cannot do Black Knights Fortress</p>
      <p>Skill challenge: You cannnot use Hunter</p>
      <p>NPC challenge: You cannot kill goblins</p>
      <p>Item Challenge: You cannot use needles or buckets</p>

      <style jsx>
        {`
            p{
              color:darkgreen;
              font-size:20px;
              margin:5px;
            }
            h2{
              text-align:center;
            }
            div{
              border:3px solid black;
              width:80%;
              margin:5px auto;
            }
          `}
      </style>
    </div>
    )
  }
}

export default IronmanChallenges
