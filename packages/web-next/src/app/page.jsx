import sanityClient from '../sanityClient'
import fetchOptions from '../utils/fetchOption'
import { FRONT_PAGE_BLOCKS } from '../queries'
import PortableTextCard from '../components/cards/PortableTextCard'
import NavigationCard from '../components/cards/NavigationCard'

const Home = async () => {
  const blocks = await sanityClient.fetch(FRONT_PAGE_BLOCKS, fetchOptions)

  return (
    <main className='w-full flex-grow flex flex-col justify-start items-center'>
      <div
        className='flex flex-col items-center bg-cover bg-center'
        style={{ backgroundImage: 'url("/abstract1.png")' }}
      >
        <div className='xl:w-2/3 :w-full mx-5 lg:mx-20 xl:mx-0 my-20'>
          {blocks.map((block) => {
            return <PortableTextCard key={block._id} block={block} />
          })}
        </div>
      </div>

      <div className='flex-grow w-full flex items-center justify-center'>
        <div
          className='
        grid w-full h-full justify-center grid-cols-1 lg:grid-cols-2
        xl:grid-cols-4 gap-5 px-5 lg:px-20 py-10 lg:py-20
        '
        >
          <NavigationCard
            title={'Tutustu'}
            description={'Tule tutustumaan minuun ja osaamiseeni tarkemmin!'}
            href={'/tietoa'}
          />
          <NavigationCard
            title={'Projektit'}
            description={
              'Selaa mielenkiintoisia projekteja, joita olen tehnyt!'
            }
            href={'/projektit'}
          />
          <NavigationCard
            title={'Työkokemus'}
            description={'Katso mihin kaikkeen ammattitaitoani on hyödynnetty!'}
            href={'/kokemus'}
          />
          <NavigationCard
            title={'Ota yhteyttä'}
            description={'Kiinnostuitko? Ota yhteyttä jo tänään!'}
            href={'/yhteys'}
          />
        </div>
      </div>
    </main>
  )
}

export default Home
