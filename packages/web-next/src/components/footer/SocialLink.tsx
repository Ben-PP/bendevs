import { RxGithubLogo } from 'react-icons/rx'
import { RxLinkedinLogo } from 'react-icons/rx'
import { RxLink2 } from 'react-icons/rx'

import FooterColumnItem from './FooterColumnItem'
import { SocialLinkIcon } from 'types'

type SocialLinkProps = {
  text: string
  url: string
  iconType: SocialLinkIcon
}

const SocialLink = ({ text, url, iconType }: SocialLinkProps) => {
  const iconSize = 20
  let icon
  switch (iconType) {
    case SocialLinkIcon.GITHUB:
      icon = <RxGithubLogo size={iconSize} />
      break
    case SocialLinkIcon.LINKEDIN:
      icon = <RxLinkedinLogo size={iconSize} />
      break
    default:
      icon = <RxLink2 size={iconSize} />
      break
  }

  return (
    <FooterColumnItem>
      <div className=''>
        <a
          href={url}
          target='_blank'
          className='flex flex-row items-center justify-center sm:justify-start'
        >
          <div className='pr-2'>{icon}</div>
          {text}
        </a>
      </div>
    </FooterColumnItem>
  )
}

export default SocialLink
