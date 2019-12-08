import SignupNotice from '../components/account-auth-permissions/SignupNotice.js'
import Enzyme, { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'

console.log(Enzyme)
Enzyme.configure({ adapter: new Adapter() })
// example snapshot
describe(`<AAA/>`, () => {
  test('renders and matches the snapshot', () => {
    const price = '$220,000'
    expect(price).toMatchSnapshot()
  })
})

// snapshot test coolMap component
// No clue why this doesn't work...
describe(`<SignupNotice/>`, () => {
  test('renders???', () => {
    console.log('FYCCCCCSDdddHKLFSDHLDSFKL;HDSFHIO;SDFSDFOHI;DSFOHHOSDFI')
    console.log(Enzyme)
    const wrapper = shallow(<span>FUCK THIS CODE</span>)
    console.log(wrapper)
  })
})
