import { onCall } from 'firebase-functions/v2/https'
import * as logger from 'firebase-functions/logger'

export const sendcontactform = onCall(
  {
    enforceAppCheck: true,
    region: 'europe-north1',
    maxInstances: 1
  },
  (request) => {
    logger.info('Data: ', request.data)
    return { hello: 'typescript' }
  }
)
