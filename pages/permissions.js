import React, { Component } from 'react'
import ManageUserPermissions from '../components/account-auth-permissions/ManageUserPermissions'
import AccountGate from '../components/account-auth-permissions/AccountGate'
class Settings extends Component {
  render () {
    return (
      <div>
        <h2>Manage User Permissions</h2>
        {/* This will obviously need to gated: */}
        <AccountGate signedUp>
          <ManageUserPermissions />
        </AccountGate>
      </div>
    )
  }
}

export default Settings
