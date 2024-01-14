import sanityClient from 'sanityClient'
import fetchOptions from 'utils/fetchOption'
import { FRONT_PAGE_BLOCKS } from 'queries'
import { NavigationCard, PortableTextCard } from 'components/cards'
import { PortableTextBlockData } from 'types'

const Home = async () => {
  const dataBlocks: PortableTextBlockData[] = await sanityClient.fetch(
    FRONT_PAGE_BLOCKS,
    fetchOptions
  )

  return (
    <main
      className='w-full flex-grow flex flex-col justify-center items-center bg-cover bg-center p-5'
      style={{ backgroundImage: 'url("/abstract1.png")' }}
    >
      {dataBlocks.map((block) => {
        return (
          <PortableTextCard
            key={block._id}
            margin={''}
            contentBlocks={block.content}
          />
        )
      })}

      <div
        className='
        grid w-full 2xl:w-2/3 justify-center grid-cols-1 lg:grid-cols-2
        gap-5  py-10 lg:py-10
        '
      >
        <NavigationCard
          title={'Tutustu'}
          description={'Tule tutustumaan minuun ja osaamiseeni tarkemmin!'}
          href={'/tietoa'}
        />
        <NavigationCard
          title={'Projektit'}
          description={'Selaa mielenkiintoisia projekteja, joita olen tehnyt!'}
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
    </main>
  )
}

export default Home
