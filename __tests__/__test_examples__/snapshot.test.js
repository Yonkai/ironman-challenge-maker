import SignupNotice from '../../components/account-auth-permissions/SignupNotice.js'
import Enzyme, { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

// example snapshot
describe(`<AAA/>`, () => {
  test('renders and matches the snapshot', () => {
    const price = '$222,000'
    expect(price).toMatchSnapshot()
  })
})

// snapshot test coolMap component
// No clue why this doesn't work...
describe(`<SignupNotice/>`, () => {
  test('renders???', () => {
    shallow(<SignupNotice />)
  })
})
