import 'dotenv/config'
import { createClient } from 'next-sanity'
const sanityClient = createClient({
  projectId: 'c1ml1moo',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
  apiVersion: '2021-03-25'
})

export default sanityClient
