import { PortableText as NativePortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'
import { TitleLarge, BodyMedium } from 'components/text'

interface PortableTextProps {
  content: PortableTextBlock[]
  components?: any
}

type ComponentChildren = { children: React.ReactNode }

const baseStyle = 'break-words hyphens-auto text-pretty'
const defaultComponents = {
  block: {
    h1: ({ children }: ComponentChildren) => (
      <TitleLarge margin='mb-10' weight='font-bold'>
        {children}
      </TitleLarge>
    ),
    normal: ({ children }: ComponentChildren) => (
      <BodyMedium>{children}</BodyMedium>
    ),
    default: ({ children }: ComponentChildren) => (
      <p className={baseStyle}>{children}</p>
    )
  }
}

const PortableText = ({ content, components }: PortableTextProps) => {
  return (
    <NativePortableText
      value={content}
      components={components ?? defaultComponents}
    />
  )
}

export default PortableText
