/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onCall } = require('firebase-functions/v2/https')
const { info } = require('firebase-functions/logger')

exports.helloworld = onCall(
  {
    enforceAppCheck: true,
    region: 'europe-north1',
    maxInstances: 1
  },
  (request) => {
    info('Hello logs v6!', { structuredData: true })
    return { hello: 'world' }
  }
)
