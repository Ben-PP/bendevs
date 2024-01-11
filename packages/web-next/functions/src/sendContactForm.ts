import { onCall } from 'firebase-functions/v2/https'
import * as logger from 'firebase-functions/logger'
import { defineString } from 'firebase-functions/params'
const sgMail = require('@sendgrid/mail')

interface EmailData {
  name: string
  subject: string
  content: string
  contactInfo: string
}

const sendgridAPIKey = defineString('SENDGRID_API_KEY')

export const sendcontactform = onCall(
  {
    enforceAppCheck: true,
    region: 'europe-north1',
    maxInstances: 1
  },
  async (request) => {
    const data = request.data
    const emailData: EmailData = {
      name: data.name,
      subject: data.subject,
      content: data.content,
      contactInfo: data.contactInfo
    }
    logger.info('Email data: ', emailData)

    sgMail.setApiKey(sendgridAPIKey.value())

    const WantsContact = `\n\n\n Wants to be contacted: ${emailData.contactInfo}`

    const email = {
      to: 'karel.parkkola@gmail.com',
      from: 'contact@bendevs.com',
      subject: `bendevs.com: ${emailData.subject}`,
      text: `From: ${emailData.name}\n\n\n${emailData.content}${
        emailData.contactInfo !== '' ? WantsContact : ''
      }`
    }
    try {
      await sgMail.send(email)
      logger.info('Email sent')
      return { status: 'success' }
    } catch (error: any) {
      logger.error(error)
      return { status: 'error' }
    }
  }
)
