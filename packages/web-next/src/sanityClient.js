import { createClient } from 'next-sanity'
const sanityClient = createClient({
  projectId: 'c1ml1moo',
  dataset: 'production',
  useCdn: false
})

export default sanityClient
