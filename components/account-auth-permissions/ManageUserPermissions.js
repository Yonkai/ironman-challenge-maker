const ManageUserPermissions = (props) => {
  return (
    <>
      <table border='1'>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>ADMIN</td>
            <td>MODERATOR</td>
            <td>ULTRAUSER</td>
            <td>USER</td>
            <td>GUEST</td>
            <td>WANDERER</td>
            <td>&nbsp;</td>
          </tr>
          {/* todo: iterate through users data to eventually generate rows for table: */}
          <tr>
            <td>John Doe</td>
            <td>johndoe@email.net</td>
            <td><input type='checkbox' /></td>
            <td><input type='checkbox' /></td>
            <td><input type='checkbox' /></td>
            <td><input type='checkbox' /></td>
            <td><input type='checkbox' /></td>
            <td><input type='checkbox' /></td>
            <td><input type='button' value='UPDATE PERMISSIONS' /></td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>janedoe@email.net</td>
            <td><input type='checkbox' /></td>
            <td><input type='checkbox' /></td>
            <td><input type='checkbox' /></td>
            <td><input type='checkbox' /></td>
            <td><input type='checkbox' /></td>
            <td><input type='checkbox' /></td>
            <td><input type='button' value='UPDATE PERMISSIONS' /></td>
          </tr>
        </tbody>
      </table>
      <style jsx>{
        `tr:nth-child(n+2):hover {
                background-color: #eee;
              }`
      }
      </style>
    </>
  )
}

export default ManageUserPermissions
