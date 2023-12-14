import { RxGithubLogo } from 'react-icons/rx'
import { RxLinkedinLogo } from 'react-icons/rx'
import { RxLink2 } from 'react-icons/rx'

import FooterColumnItem from './FooterColumnItem'

const SocialLink = ({ text, url, iconType }) => {
  const iconSize = 20
  let icon
  switch (iconType) {
    case 'github':
      icon = <RxGithubLogo size={iconSize} />
      break
    case 'linkedin':
      icon = <RxLinkedinLogo size={iconSize} />
      break
    default:
      icon = <RxLink2 size={iconSize} />
      break
  }

  return (
    <FooterColumnItem>
      <div className=''>
        <a href={url} target='_blank' className='flex flex-row items-center'>
          <div className='pr-2'>{icon}</div>
          {text}
        </a>
      </div>
    </FooterColumnItem>
  )
}

export default SocialLink
