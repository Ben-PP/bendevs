'use client'

import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider
} from 'firebase/app-check'
import { useEffect } from 'react'
import { helloWorld, app } from './firebase'

const ContactView = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      self.FIREBASE_APPCHECK_DEBUG_TOKEN = true
    }

    initializeAppCheck(app, {
      provider: new ReCaptchaEnterpriseProvider(
        '6LeTrUopAAAAACcYuNlzSPu5lPB5RTkRR6istEA3'
      ),
      isTokenAutoRefreshEnabled: true
    })
  }, [])
  const onClick = () => {
    helloWorld()
      .call()
      .then((result) => {
        console.log(result)
      })
  }
  return (
    <div>
      <button onClick={onClick}>test hello function</button>
    </div>
  )
}

export default ContactView
