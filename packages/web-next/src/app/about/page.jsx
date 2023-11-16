import { PortableText } from '@portabletext/react'
import sanityClient from '../../sanityClient'
import fetchOptions from '../../utils/fetchOption'
import { ABOUT_PAGE_BLOCKS } from '../../queries'

const AboutView = async () => {
  const blocks = await sanityClient.fetch(ABOUT_PAGE_BLOCKS, fetchOptions)

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

export default AboutView
