import React, { Component } from 'react'
import ManageUserPermissions from '../components/account-auth-permissions/ManageUserPermissions'
import RestrictedResourcesGate from '../components/account-auth-permissions/RestrictedResourcesGate'
class Settings extends Component {
  render () {
    return (
      <div>
        <h2>Manage User Permissions</h2>
        {/* This will obviously need to gated: */}
        <RestrictedResourcesGate signedUp>
          <ManageUserPermissions />
        </RestrictedResourcesGate>
      </div>
    )
  }
}

export default Settings
