import sanityClient from '../../sanityClient'
import fetchOptions from '../../utils/fetchOption'
import { ABOUT_PAGE_BLOCKS } from '../../queries'
import PortableTextCard from '../../components/cards/PortableTextCard'

const AboutView = async () => {
  const blocks = await sanityClient.fetch(ABOUT_PAGE_BLOCKS, fetchOptions)

  const components = {
    block: {
      h1: ({ children }) => <h1 className='text-3xl'>{children}</h1>,
      default: ({ children }) => <p>{children}</p>
    }
  }
  return (
    <div className='flex justify-center flex-row flex-wrap m-4'>
      {blocks.map((block) => {
        return (
          <div
            key={block._id}
            className='lg:w-2/5 lg:w-max-3/4 flex-grow lg:m-8 mb-16'
          >
            <PortableTextCard block={block} />
          </div>
        )
      })}
    </div>
  )
}

export default AboutView
