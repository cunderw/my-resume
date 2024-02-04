import { dummyResume, getResume } from './Resume'

describe('getResume function', () => {
  test('returns the dummyResume data after a delay', async () => {
    jest.useFakeTimers()
    const promise = getResume()
    jest.runAllTimers()

    await expect(promise).resolves.toEqual(dummyResume)

    jest.useRealTimers()
  })
})
