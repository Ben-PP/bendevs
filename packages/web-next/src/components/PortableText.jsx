import { PortableText as NativePortableText } from '@portabletext/react'
import { TitleLarge, BodyMedium } from 'components/text'

const baseStyle = 'break-words hyphens-auto text-pretty'
const defaultComponents = {
  block: {
    h1: ({ children }) => (
      <TitleLarge color='text-secondary' margin='mb-10' weight='font-bold'>
        {children}
      </TitleLarge>
    ),
    normal: ({ children }) => <BodyMedium>{children}</BodyMedium>,
    default: ({ children }) => <p className={baseStyle}>{children}</p>
  }
}

const PortableText = ({ content, components }) => {
  return (
    <NativePortableText
      value={content}
      components={components ?? defaultComponents}
    />
  )
}

export default PortableText
