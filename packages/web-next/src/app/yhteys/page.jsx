'use client'

import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider
} from 'firebase/app-check'
import { useEffect, useState } from 'react'
import { sendContactForm, app } from './firebase'
import Button from '../../components/Button'
import { useField } from '../../hooks'

const styles = {
  input: `
  shadow appearance-none border rounded-xl w-full my-5 py-2 px-3 text-accent-dark
  leading-tight focus:outline-none focus:shadow-hover-form-focus
  `,
  label: 'text-2xl',
  errorMessage: 'border-red-600 border-2 rounded-xl py-2'
}

const FormField = ({ label, controller, multiline }) => {
  const field = multiline ? (
    <textarea
      className={`${styles.input} resize-none`}
      {...controller}
      rows={5}
    />
  ) : (
    <input className={styles.input} {...controller} />
  )
  return (
    <div>
      <h4 className={styles.label}>{label}</h4>
      {field}
    </div>
  )
}

const ContactView = () => {
  const { reset: nameReset, ...name } = useField('text')
  const { reset: subjectReset, ...subject } = useField('text')
  const { reset: contentReset, ...content } = useField('text')
  const { reset: contactInfoReset, ...contactInfo } = useField('text')
  const [formError, setFormError] = useState()
  const [wantsContact, setWantsContact] = useState(false)
  const [sendStatus, setSendStatus] = useState(null)

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
  const onSubmit = (event) => {
    event.preventDefault()

    setSendStatus('loading')

    if (name.value === '') {
      setFormError('Nimi ei voi olla tyhjä')
      setSendStatus(null)
      return
    }

    if (subject.value === '') {
      setFormError('Aihe ei voi olla tyhjä')
      setSendStatus(null)
      return
    }

    if (content.value === '') {
      setFormError('Viesti ei voi olla tyhjä')
      setSendStatus(null)
      return
    }

    setFormError(null)

    sendContactForm({
      name: name.value,
      subject: subject.value,
      content: content.value,
      contactInfo: contactInfo.value
    }).then((result) => {
      console.log(result)
      setSendStatus('ok')
      nameReset()
      subjectReset()
      contentReset()
      contactInfoReset()
    })
  }

  return (
    <div className='flex flex-col flex-grow justify-start items-center mx-5'>
      <form
        className='
          text-center border-2 rounded-xl px-2 lg:px-20 py-2 lg:py-10 m-2
          lg:m-10 w-full lg:w-1/2
        '
        onSubmit={onSubmit}
      >
        <h1 className='text-5xl mb-5'>Ota yhteyttä</h1>
        <FormField label='Nimi*' controller={name} />
        <FormField label='Aihe*' controller={subject} />
        <FormField label='Viesti*' controller={content} multiline={true} />
        <div className='flex my-5 text-lg justify-center items-center'>
          <input
            type='checkbox'
            className='mr-3 h-6 w-6 '
            value={wantsContact}
            onChange={() => setWantsContact(!wantsContact)}
          />
          <label className=''>Haluan että minuun otetaan yhteyttä</label>
        </div>
        {wantsContact && (
          <FormField label='Yhteystiedot' controller={contactInfo} />
        )}
        {formError && <h4 className={styles.errorMessage}>{formError}</h4>}
        <p className='my-5'>* Pakollinen kenttä</p>
        {sendStatus === 'ok' && (
          <h3 className='text-3xl pb-5 text-green-600'>Viesti lähetetty!</h3>
        )}
        <Button
          type='submit'
          text={'Lähetä'}
          isHollow={true}
          size={'lg'}
          isLoading={sendStatus !== null && sendStatus !== 'ok'}
        />
      </form>
    </div>
  )
}

export default ContactView
