import React, { Component } from 'react'

class HowToUse extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <div>
        <p>To use fantasy ironman maker, you first creator your fantasy ironman
        in the creator section.</p><p>
        From there you can save your ironman to the portal, where both your ironmen
        can be viewed and others can be viewed and loaded from the backend.
        </p>
        <style jsx>{`
        p{
          font-size:18px;
        }
      `}</style>
      </div>
    )
  }
}

export default HowToUse
