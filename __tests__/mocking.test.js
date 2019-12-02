describe('mocking learning', () => {
  test('mocks a reg function', () => {
    const fetchDogs = jest.fn()
    fetchDogs()
    fetchDogs('timelord')
    expect(fetchDogs).toHaveBeenCalled()
    expect(fetchDogs).toHaveBeenCalledWith('timelord')
  })
})
// https://jestjs.io/docs/en/mock-functions
