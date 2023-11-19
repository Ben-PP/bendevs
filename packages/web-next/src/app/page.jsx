import sanityClient from '../sanityClient'
import fetchOptions from '../utils/fetchOption'
import { FRONT_PAGE_BLOCKS } from '../queries'
import PortableTextCard from '../components/cards/PortableTextCard'

const Home = async () => {
  const blocks = await sanityClient.fetch(FRONT_PAGE_BLOCKS, fetchOptions)

  return (
    <main className='flex justify-center m-4'>
      {blocks.map((block) => {
        return <PortableTextCard key={block._id} block={block} />
      })}
    </main>
  )
}

export default Home
