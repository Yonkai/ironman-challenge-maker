describe('BBBBBBBBBBBB', () => {
  test.skip('Does 20 equal 20?', () => {
    expect(20).toEqual(20)
    expect(20).toEqual(21)
  })
})

describe('CCCCCCCCCCCCCCCCCC', () => {
  test.skip('Does 1 equal 2?', () => {
    expect(1).toEqual(2)
  })

  test('Range check, is x>y?', () => {
    expect(20).toBeGreaterThan(10)
  })
})

describe('DDDDDDDDDDDDDDDD', () => {
  test('Does 44 equal 44?', () => {
    expect(44).toEqual(44)
  })
})
