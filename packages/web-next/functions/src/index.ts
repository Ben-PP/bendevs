/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onCall } from 'firebase-functions/v2/https'
import * as logger from 'firebase-functions/logger'

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const hellotypescript = onCall(
  {
    enforceAppCheck: true,
    region: 'europe-north1',
    maxInstances: 1
  },
  (_request) => {
    logger.info('Hello from typescript!', { structuredData: true })
    return { hello: 'typescript' }
  }
)