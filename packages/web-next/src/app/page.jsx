import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import sanityClient from '../sanityClient'
import fetchOptions from '../utils/fetchOption'

const query = groq`
  *[_type == "frontpage"] {
    ...,
    items[] ->
  }
`
const getBlocks = async () => {
  const response = await sanityClient.fetch(query, fetchOptions)
  return response[0].items
}

const Home = async () => {
  const blocks = await getBlocks()

  const components = {
    block: {
      h1: ({ children }) => <h1 className='text-3xl'>{children}</h1>,
      default: ({ children }) => <p>{children}</p>
    }
  }

  return (
    <main className='text-center'>
      {blocks.map((block) => {
        return (
          <div key={block._id} className='bg-gray-200'>
            <PortableText value={block.content} components={components} />
          </div>
        )
      })}
    </main>
  )
}

export default Home
