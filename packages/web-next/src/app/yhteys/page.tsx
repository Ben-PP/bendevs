'use client'

import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider
} from 'firebase/app-check'
import { useEffect, useState } from 'react'
import { sendContactForm, app } from './firebase'
import { Button } from '@/components/buttons'
import { useField } from '../../hooks'
import {
  TitleLarge,
  TitleSmall,
  LabelMedium,
  LabelSmall
} from 'components/text'
import { ButtonType, ButtonSize } from 'types'

type FieldController = {
  type: string
  value: string
  onChange: (event: any) => void
}

type FormFieldProps = {
  label: string
  controller: FieldController
  multiline?: boolean
}

const styles = {
  input: `
  shadow appearance-none border rounded-xl w-full my-5 py-2 px-3
  text-accent-dark leading-tight focus:outline-none
  focus:shadow-hover-form-focus
  `,
  errorMessage: 'border-red-600 border-2 rounded-xl py-2'
}

const FormField = ({
  label,
  controller,
  multiline = false
}: FormFieldProps) => {
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
      <LabelMedium>{label}</LabelMedium>
      {field}
    </div>
  )
}

const ContactView = () => {
  const { reset: nameReset, ...name } = useField('text')
  const { reset: subjectReset, ...subject } = useField('text')
  const { reset: contentReset, ...content } = useField('text')
  const { reset: contactInfoReset, ...contactInfo } = useField('text')
  const [formError, setFormError] = useState<string | null>()
  const [wantsContact, setWantsContact] = useState<boolean>(false)
  const [sendStatus, setSendStatus] = useState<string | null>(null)

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
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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
      setSendStatus('ok')
      nameReset()
      subjectReset()
      contentReset()
      contactInfoReset()
    })
  }

  return (
    <div
      className='
      flex flex-col flex-grow justify-center items-center
      bg-cover bg-center
    '
      style={{ backgroundImage: 'url("/abstract1.png")' }}
    >
      <form
        className='
          text-center border-4  rounded-2xl px-5 lg:px-20 py-5 lg:py-10 m-5
          lg:m-10  lg:w-1/2 bg-card bg-opacity-90
        '
        onSubmit={onSubmit}
      >
        <TitleLarge margin='mb-10'>Ota yhteyttä</TitleLarge>
        <FormField label='Nimi*' controller={name} />
        <FormField label='Aihe*' controller={subject} />
        <FormField label='Viesti*' controller={content} multiline={true} />
        <div
          className='
            flex my-5 mx-8 text-lg justify-center items-center text-left
        '
        >
          <input
            type='checkbox'
            className='mr-3 h-6 w-6 flex-shrink-0'
            value={`${wantsContact}`}
            onChange={() => setWantsContact(!wantsContact)}
          />
          <LabelSmall>Haluan että minuun otetaan yhteyttä</LabelSmall>
        </div>
        {wantsContact && (
          <FormField label='Yhteystiedot' controller={contactInfo} />
        )}
        {formError && <h4 className={styles.errorMessage}>{formError}</h4>}
        <p className='my-5'>* Pakollinen kenttä</p>
        {sendStatus === 'ok' && (
          <TitleSmall color='text-green-600' margin='mb-5'>
            Viesti lähetetty!
          </TitleSmall>
        )}
        <Button
          type={ButtonType.SUBMIT}
          text={'Lähetä'}
          size={ButtonSize.LARGE}
          isLoading={sendStatus !== null && sendStatus !== 'ok'}
          isHollow={true}
        />
      </form>
    </div>
  )
}

export default ContactView
