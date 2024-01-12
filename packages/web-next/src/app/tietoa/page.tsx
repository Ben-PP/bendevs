import Image from 'next/image'
import sanityClient from '../../sanityClient'
import fetchOptions from '../../utils/fetchOption'
import { ABOUT_PAGE_BLOCKS, PROFILE_IMAGE_URL, PROFILE } from '../../queries'
import PortableTextCard from '../../components/cards/PortableTextCard'
import TagList from '../../components/tags/TagList'
import SidePanel from '../../components/panels/SidePanel'
import ContentPanel from '../../components/panels/ContentPanel'
import { TitleMedium, TitleSmall, BodySmall } from '@/components/text'
import { PortableTextBlockData } from 'types'

const AboutView = async () => {
  const dataBlocks: PortableTextBlockData[] = await sanityClient.fetch(
    ABOUT_PAGE_BLOCKS,
    fetchOptions
  )
  const profileImageUrl = await sanityClient.fetch(
    PROFILE_IMAGE_URL,
    fetchOptions
  )
  const profile = await sanityClient.fetch(PROFILE, fetchOptions)

  return (
    <div className='flex lg:flex-row flex-col w-full flex-grow'>
      <SidePanel>
        <div className='p-10'>
          <div
            className='
          aspect-square overflow-hidden rounded-full justify-center
          '
          >
            <Image
              className='w-full object-cover'
              width={500}
              height={500}
              src={profileImageUrl}
              alt='Image of Karel Parkkola'
            />
          </div>
          <div className='text-center my-8'>
            <TitleMedium>{profile.name}</TitleMedium>
          </div>
          <BodySmall wrap={false}>{profile.bio}</BodySmall>
          <div className='pt-10 text-center'>
            <TitleSmall
              weight='font-bold'
              color='text-primary-dark'
              margin='my-5'
            >
              Osaaminen
            </TitleSmall>
            <TagList tags={profile.skills} />
          </div>
        </div>
      </SidePanel>
      <ContentPanel backgroundImage='/abstract8.png'>
        {dataBlocks.map((block) => {
          return (
            <div key={block._id} className='p-5 lg:px-20 lg:py-10'>
              <PortableTextCard contentBlocks={block.content} />
            </div>
          )
        })}
      </ContentPanel>
    </div>
  )
}

export default AboutView
