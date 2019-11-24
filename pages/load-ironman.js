import React, { Component } from 'react'
import AccountGate from '../components/account-auth-permissions/AccountGate'
class LoadIronman extends Component {
  render () {
    return (
      <>
        <AccountGate signedUp>
          <div>
            <p>View other's fantasy ironmen creations</p>
            <p>Your saved fantasy ironmen</p>
            <button>load this ironman!</button>
          </div>
        </AccountGate>
        {/*
            TODO: Use deviantart as a reference for the portal,
            break it up into abstract ui components and then
            modify the design the fit the material (ironmen) and then
            hook it up (vernacuarly) with the backend which I haven't
            decided yet which stack to use.

            (deviantart is made with react, redux, sentry, and lodash. All of my
            favorite stuff.)

            https://www.deviantart.com/
            https://material-ui.com/components/ (for naming conventions)

            Possibily remove account gate? or at least put it on a smaller
            section of the overall layout. Review Nir book to make it nice.
        */}
      </>
    )
  }
}

export default LoadIronman
