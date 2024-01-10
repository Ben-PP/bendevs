import { initializeApp } from 'firebase/app'
import {
  getFunctions,
  connectFunctionsEmulator,
  httpsCallable
} from '@firebase/functions'

const API_KEY =
  process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_FIREBASE_DEV_API_KEY
    : 'AIzaSyCGkCdu-_VqSmBzzo9eC8UFxL9P_ICqn3c'

const config = {
  apiKey: API_KEY,
  authDomain: 'bendevs-81fe2.firebaseapp.com',
  projectId: 'bendevs-81fe2',
  storageBucket: 'bendevs-81fe2.appspot.com',
  messagingSenderId: '526931287738',
  appId: '1:526931287738:web:15c75edb14904869afac83',
  measurementId: 'G-B0Y1R45L4X'
}

const app = initializeApp(config)

const firebaseFunctions = getFunctions(app, 'europe-north1')
if (process.env.NODE_ENV === 'development') {
  connectFunctionsEmulator(firebaseFunctions, '127.0.0.1', 5001)
}

// Get this working
const sendContactForm = () =>
  httpsCallable(firebaseFunctions, 'sendcontactform')

export { app, sendContactForm }
