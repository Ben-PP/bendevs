import { PortableText as NativePortableText } from '@portabletext/react'

const baseStyle = 'overflow-wrap hyphens-auto text-pretty'
const defaultComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className={`text-5xl mb-10 font-bold text-secondary ${baseStyle}`}>
        {children}
      </h1>
    ),
    normal: ({ children }) => (
      <p className={`text-2xl text-primary-dark ${baseStyle}`}>{children}</p>
    ),
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
