// example snapshot
describe(`<AAA/>`, () => {
  it('renders and matches the snapshot', () => {
    const price = '$220,000'
    expect(price).toMatchSnapshot()
  })
})
