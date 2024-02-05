import { doc, getDoc } from 'firebase/firestore/lite'

import { db } from '../lib/Firebase'
import { mapResumeData, ResumeModel } from '../models/Resume'

const getResume = async (): Promise<ResumeModel> => {
  const docRef = doc(db, 'site-data', 'resume')
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    const data = docSnap.data()

    return mapResumeData(data)
  } else {
    throw new Error('Document does not exist!')
  }
}

export { getResume }
