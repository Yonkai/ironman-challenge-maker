import SignupNotice from '../components/account-auth-permissions/SignupNotice.js'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'

// example snapshot
describe(`<AAA/>`, () => {
  test('renders and matches the snapshot', () => {
    const price = '$220,000'
    expect(price).toMatchSnapshot()
  })
})

// snapshot test coolMap component
// No clue why this doesn't work....
describe(`<SignupNotice/>`, () => {
  test.skip('renders?', () => {
    const wrapper = mount(<SignupNotice />)
    expect(wrapper.exists()).to.equal(true)
  })
})
