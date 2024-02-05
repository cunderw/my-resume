export const ref = jest.fn(() => {
  return {}
})

export const getDownloadURL = jest.fn(() => {
  return Promise.resolve('https://example.com/mockDownloadUrl')
})

export const getStorage = jest.fn(() => {
  return {}
})
