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
      </>
    )
  }
}

export default LoadIronman
