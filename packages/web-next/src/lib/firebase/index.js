'use client'
import { initializeApp, getApp } from 'firebase/app'
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider
} from 'firebase/app-check'
import {
  getFunctions,
  connectFunctionsEmulator,
  httpsCallable
} from 'firebase/functions'

const firebaseConfig = {
  apiKey: 'AIzaSyCGkCdu-_VqSmBzzo9eC8UFxL9P_ICqn3c',
  authDomain: 'bendevs-81fe2.firebaseapp.com',
  projectId: 'bendevs-81fe2',
  storageBucket: 'bendevs-81fe2.appspot.com',
  messagingSenderId: '526931287738',
  appId: '1:526931287738:web:15c75edb14904869afac83',
  measurementId: 'G-B0Y1R45L4X'
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

self.FIREBASE_APPCHECK_DEBUG_TOKEN = true

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(
    '6LeTrUopAAAAACcYuNlzSPu5lPB5RTkRR6istEA3'
  ),
  isTokenAutoRefreshEnabled: true
})

const functions = getFunctions(getApp(), 'europe-north1')
connectFunctionsEmulator(functions, '127.0.0.1', 5001)

const helloWorld = () => httpsCallable(functions, 'helloWorld')

export { app, appCheck, functions, helloWorld }
