import Button, { ButtonProps } from './Button'
import { RxGithubLogo, RxLinkedinLogo } from 'react-icons/rx'
import { SocialLinkIcon } from 'types'

interface SocialButtonProps extends ButtonProps {
  icon: SocialLinkIcon
  href: string
}

const SocialButton = ({ icon, href, ...props }: SocialButtonProps) => {
  let iconComponent
  switch (icon) {
    case SocialLinkIcon.LINKEDIN:
      iconComponent = <RxLinkedinLogo />
      break
    case SocialLinkIcon.GITHUB:
      iconComponent = <RxGithubLogo />
      break
    default:
      break
  }
  return (
    <a href={href} target='empty'>
      <Button {...props} icon={iconComponent} />
    </a>
  )
}

export default SocialButton
