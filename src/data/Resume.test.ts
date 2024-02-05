import { doc, getDoc } from 'firebase/firestore/lite'

import { mapResumeData } from '../models/Resume'
import { getResume } from './Resume'

jest.mock('firebase/firestore/lite', () => ({
  doc: jest.fn(),
  getDoc: jest.fn()
}))

jest.mock('../lib/Firebase', () => ({ db: {} }))
jest.mock('../models/Resume', () => ({
  mapResumeData: jest.fn().mockImplementation((data) => data)
}))

test('successfully fetches resume data', async () => {
  const mockDocSnap = {
    exists: () => true,
    data: () => ({
      name: 'John Doe',
      email: 'test@test.com'
    })
  }

  ;(getDoc as jest.Mock).mockResolvedValue(mockDocSnap)

  const result = await getResume()

  expect(doc).toHaveBeenCalled()
  expect(getDoc).toHaveBeenCalled()
  expect(mapResumeData).toHaveBeenCalledWith(mockDocSnap.data())
  expect(result).toEqual(mockDocSnap.data())
})

test('throws an error when the document does not exist', async () => {
  const mockDocSnap = { exists: () => false }

  ;(getDoc as jest.Mock).mockResolvedValue(mockDocSnap)

  await expect(getResume()).rejects.toThrow('Document does not exist!')
})

test('throws an error during document fetch', async () => {
  ;(getDoc as jest.Mock).mockRejectedValue(new Error('Firestore Error'))

  await expect(getResume()).rejects.toThrow('Firestore Error')
})
