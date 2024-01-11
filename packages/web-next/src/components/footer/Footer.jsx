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
    <footer className='bg-tertiary p-5'>
      <div className='flex flex-col items-center text-primary-dark'>
        <div className='flex sm:flex-row flex-col p-5'>
          <div className='order-2 sm:order-1'>
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
          </div>
          <div className='order-1 sm:order-2 mb-8 sm:mb-0'>
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
        </div>
        <h4 className='hidden sm:inline-block text-accent-light'>
          &copy; {currentYear} bendevs.com | Karel Parkkola
        </h4>
        <div className='sm:hidden flex flex-col'>
          <h4 className='text-accent-light'>
            &copy; {currentYear} bendevs.com
          </h4>
          <h4 className='ml-5 text-accent-light'>Karel Parkkola</h4>
        </div>
      </div>
    </footer>
  )
}

export default Footer
