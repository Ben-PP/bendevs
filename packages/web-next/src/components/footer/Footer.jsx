import Link from 'next/link'
import sanityClient from '../../sanityClient'
import fetchOptions from '../../utils/fetchOption'
import FooterColumn from './FooterColumn'

import SocialLink from './SocialLink'
import { SOCIAL_LINKS } from '../../queries'
import FooterColumnItem from './FooterColumnItem'

const Footer = async () => {
  const currentYear = new Date().getFullYear()
  const socialLinks = await sanityClient.fetch(SOCIAL_LINKS, fetchOptions)

  return (
    <footer className='bg-black p-5'>
      <div className='flex flex-col items-center text-white'>
        <div className='flex flex-row p-5'>
          <FooterColumn title='Bendevs'>
            <FooterColumnItem>
              <Link href='/'>Etusivu</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link href='/tietoa'>Tietoa</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link href='/projektit'>Projektit</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link href='/kokemus'>Työkokemus</Link>
            </FooterColumnItem>
            <FooterColumnItem>
              <Link href='/yhteys'>Yhteys</Link>
            </FooterColumnItem>
          </FooterColumn>
          <FooterColumn title='Löydä minut'>
            {socialLinks.map((socialLink) => {
              return (
                <SocialLink
                  key={socialLink._id}
                  text={socialLink.text}
                  url={socialLink.url}
                  iconType={socialLink.icon}
                />
              )
            })}
          </FooterColumn>
        </div>
        <h4 className='text-gray-700'>
          &copy; {currentYear} bendevs.com | Karel Parkkola
        </h4>
      </div>
    </footer>
  )
}

export default Footer
