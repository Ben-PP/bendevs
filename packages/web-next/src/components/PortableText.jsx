import { PortableText as NativePortableText } from '@portabletext/react'

const defaultComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className='text-5xl mb-10 font-bold text-secondary'>{children}</h1>
    ),
    normal: ({ children }) => (
      <p className='text-2xl text-primary-dark'>{children}</p>
    ),
    default: ({ children }) => <p className=''>{children}</p>
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
