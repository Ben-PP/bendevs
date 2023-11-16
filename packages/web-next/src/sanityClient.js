import 'dotenv/config'
import { createClient } from 'next-sanity'
const sanityClient = createClient({
  projectId: 'c1ml1moo',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN
})

export default sanityClient
