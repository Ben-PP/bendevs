import Image from 'next/image'
import sanityClient from '../../sanityClient'
import fetchOptions from '../../utils/fetchOption'
import { ABOUT_PAGE_BLOCKS, PROFILE_IMAGE_URL, PROFILE } from '../../queries'
import PortableTextCard from '../../components/cards/PortableTextCard'
import TagList from '../../components/TagList'
import SidePanel from '../../components/SidePanel'
import ContentPanel from '../../components/ContentPanel'

const AboutView = async () => {
  const blocks = await sanityClient.fetch(ABOUT_PAGE_BLOCKS, fetchOptions)
  const profileImageUrl = await sanityClient.fetch(
    PROFILE_IMAGE_URL,
    fetchOptions
  )
  const profile = await sanityClient.fetch(PROFILE, fetchOptions)

  return (
    <div className='flex lg:flex-row flex-col w-full flex-grow'>
      <SidePanel>
        <div className='aspect-square overflow-hidden rounded-full justify-center'>
          <Image
            className='w-full object-cover'
            width={500}
            height={500}
            src={profileImageUrl}
            alt='profile image'
          />
        </div>
        <div className='text-4xl text-center my-8'>{profile.name}</div>
        <div className='text-xl text-left text-white'>{profile.bio}</div>
        <h3 className='my-5 text-3xl text-center'>Osaaminen</h3>
        <TagList tags={profile.skills} />
      </SidePanel>
      <ContentPanel backgroundImage='/abstract8.png'>
        {blocks.map((block) => {
          return (
            <div key={block._id} className='p-5 lg:p-20'>
              <PortableTextCard block={block} />
            </div>
          )
        })}
      </ContentPanel>
    </div>
  )
}

export default AboutView
