import React, { Component } from 'react'
import { definitions } from '../styles/pageSpecificStyles.js'

class Define extends Component {
  render () {
    return (
      <>
        <div>
          <h1>Ironman Type</h1>
          <p>What kind of ironman to use.</p>

          <h1>Zoom Restrictions</h1>
          <p>What your zoom must be like when you play.</p>

          <h1>Your Items</h1>
          <p>Items you are prevented from using, or from not using.</p>

          <h1>Your Beasts</h1>
          <p>Monsters you can or cannot kill.</p>

          <h1>Going Area</h1>
          <p>You are not/are prevented from going to these areas.</p>

          <h1>Using Area</h1>
          <p>You are not/are prevented from using these areas.</p>

          <h1>Spells</h1>
          <p>Spells you can or cannot use.</p>

          <h1>Potions</h1>
          <p>Potions you can or cannot use.</p>

          <h1>Skills</h1>
          <p>Skills you can or cannot use.</p>

          <h1>Minigames</h1>
          <p>Minigames you can or cannot play.</p>

          <h1>Quests</h1>
          <p>Quests you can or cannot do.</p>

          <h1>Food</h1>
          <p>Foods you can or cannot eat.</p>

          <h1>Biome</h1>
          <p>Biomes you can use or cannot use.</p>

          <h1>Slots</h1>
          <p>Slots you can or cannot use.</p>

          <h1>Combat</h1>
          <p>Combat mode restrictions.</p>

        </div>
        <style jsx>
          {`
          div{
            height: 100vh;
            overflow-y: scroll;
            grid-area: define;
            box-sizing: border-box;
        }
        h1,p{
          margin:0;
          background:lightgrey;
        }
        p{
          background:white;
          font-size:18px;
        }
          }
          `}
        </style>
      </>
    )
  }
}

Define.getInitialProps = async function () {
  // define a prop for external stylesheet and then pass to _app,
  // where it will dynamically redefine the _app shell for each
  // page, definitely a workaround but I can't find a better
  // solution right now.
  return { overwrittenLayout: definitions }
}

export default Define
