import React, { Component } from 'react'
import ManageUserPermissions from '../components/account-auth-permissions/ManageUserPermissions'
import RestrictedResourcesGate from '../components/account-auth-permissions/RestrictedResourcesGate'
import axios from 'axios'
import config from '../data/config'
class RestrictedResourceExamplePage extends Component {
  render () {
      function checkForSessionToken(e){
          e.preventDefault()
          axios.post(`http://${config.backend_host}/auth/checkforsessionidtoken`,{test:'data',key:'value',alice:'bob',bird:'feathers'},{withCredentials:true})
      }
    return (
      <div>
        <h2>Permissions Test Page</h2>
        {/* This is a gate to show if the user has not yet signed up for account: */}
        <RestrictedResourcesGate signedUp>
          <p>Only people who have any account with any permissions level should be able to see the colors...</p>
        </RestrictedResourcesGate>
        <a href="#" onClick={checkForSessionToken}>Check for sessison token</a>
        <p> Account username: </p>
      </div>
    )
  }
}

export default RestrictedResourceExamplePage
