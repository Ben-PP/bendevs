import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'
import sanityClient from 'sanityClient'
import fetchOptions from 'utils/fetchOption'
import { ABOUT_PAGE_BLOCKS, PROFILE_IMAGE_URL, PROFILE, CV_URL } from 'queries'
import { PortableTextCard } from 'components/cards'
import { TagList } from 'components/tags'
import { ContentPanel, SidePanel } from 'components/panels'
import { TitleMedium, TitleSmall, BodySmall } from 'components/text'
import { Button } from 'components/buttons'
import { PortableTextBlockData, ButtonSize } from 'types'
import { RxDownload, RxEnvelopeClosed } from 'react-icons/rx'

export const metadata: Metadata = {
  title: 'Bendevs | Karel Parkkola',
  description: `Tällä sivulla voit tutustua henkilöön Karel Parkkola. Karelin
  osaamiseen kuuluu esimerkiksi React, TypeScript, JavaScript, Dart, Flutter,
   Python, palomuurit, palvelimet ja hyvien vitsien kertominen.`
}

const Buttons = ({
  className,
  cvUrl
}: {
  className?: string
  cvUrl: string
}) => {
  return (
    <div className={`${className} w-full my-10 text-center`}>
      <TitleSmall color='text-primary-dark' weight='font-bold'>
        Lisää
      </TitleSmall>
      <div className='text-center mt-10'>
        <a
          href={cvUrl}
          download='cv_karel_parkkola'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button
            text='Lataa cv'
            icon={<RxDownload />}
            size={ButtonSize.LARGE}
            isHollow={true}
          />
        </a>
      </div>
      <div className='text-center mt-10'>
        <Link href='/yhteys'>
          <Button
            text='Ota yhteyttä'
            icon={<RxEnvelopeClosed />}
            size={ButtonSize.LARGE}
            isHollow={true}
          />
        </Link>
      </div>
    </div>
  )
}

const AboutView = async () => {
  const dataBlocks: PortableTextBlockData[] = await sanityClient.fetch(
    ABOUT_PAGE_BLOCKS,
    fetchOptions
  )
  const profileImageUrl = `${await sanityClient.fetch(
    PROFILE_IMAGE_URL,
    fetchOptions
  )}?fm=webp&w=500&h=500`
  const cvUrl: string = `${await sanityClient.fetch(
    CV_URL,
    fetchOptions
  )}?d1=cv_karel_parkkola.pdf`

  const profile = await sanityClient.fetch(PROFILE, fetchOptions)

  return (
    <div className='flex lg:flex-row flex-col w-full flex-grow'>
      <SidePanel>
        <div className='p-10'>
          <div
            className='
          aspect-square overflow-hidden rounded-full justify-center lg:mx-5 xl:mx-18 2xl:mx-20
          '
          >
            <Image
              className='w-full object-cover'
              width={500}
              height={500}
              src={profileImageUrl}
              alt='Erittäin komea kuva henkilöstä Karel Parkkola'
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
          <div className='lg:hidden inline-block text-center pt-10'>
            <TitleSmall color='text-primary-dark'>
              Etsikö CV:tä? Lataus sivun alaosassa!
            </TitleSmall>
          </div>
          <Buttons className='hidden lg:inline-block' cvUrl={cvUrl} />
        </div>
      </SidePanel>
      <ContentPanel backgroundImage='/abstract8.webp'>
        {dataBlocks.map((block) => {
          return (
            <PortableTextCard key={block._id} contentBlocks={block.content} />
          )
        })}
      </ContentPanel>
      <Buttons className='lg:hidden inline-block' cvUrl={cvUrl} />
    </div>
  )
}

export default AboutView
