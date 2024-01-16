import sanityClient from 'sanityClient'
import fetchOptions from 'utils/fetchOption'
import { SOCIAL_LINKS } from 'queries'
import { Metadata } from 'next'
import ContactForm from './components/ContactForm'
import { SocialButton } from 'components/buttons'
import { TitleLarge } from 'components/text'
import { ButtonSize, SocialLinkData } from 'types'

export const metadata: Metadata = {
  title: 'Bendevs | Yhteys',
  description: `Tällä sivulla voit lähettää viestin henkilölle Karel Parkkola
  ja tutustua hänen sosiaalisen median tileihinsä.`
}

const ContactView = async () => {
  const socialLinks: SocialLinkData[] = await sanityClient.fetch(
    SOCIAL_LINKS,
    fetchOptions
  )

  return (
    <div
      className='
      flex flex-col flex-grow justify-center items-center
      bg-fixed bg-cover bg-center
    '
      style={{ backgroundImage: 'url("/abstract1.webp")' }}
    >
      <ContactForm />
      <div
        className={`
        text-center border-4 border-primary-dark rounded-2xl px-5  py-5 lg:py-10 m-5
        lg:m-10  lg:w-1/2 bg-card bg-opacity-90
      `}
      >
        <TitleLarge>Sosiaalinen media</TitleLarge>
        <div className='flex flex-col lg:flex-row justify-center pt-10'>
          {socialLinks.map((link) => {
            return (
              <div key={link._id} className='m-5'>
                <SocialButton
                  text={link.text}
                  href={link.url}
                  icon={link.icon}
                  size={ButtonSize.LARGE}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ContactView
