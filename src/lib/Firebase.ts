// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA8YJuDb0MvWufZ8yNG59vIbxLVevasKtg',
  authDomain: 'cunderw-resume.firebaseapp.com',
  projectId: 'cunderw-resume',
  storageBucket: 'cunderw-resume.appspot.com',
  messagingSenderId: '533922736649',
  appId: '1:533922736649:web:97f6fecddbad547f7866d8',
  measurementId: 'G-7FXZDW2MFR'
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const db = getFirestore(firebase)
const storage = getStorage(firebase)

export { db, storage }
