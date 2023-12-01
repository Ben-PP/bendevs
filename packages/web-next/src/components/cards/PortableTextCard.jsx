import { PortableText } from '@portabletext/react'
import CardBase from './CardBase'

const defaultComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className='text-5xl mb-10 font-bold text-indigo-500'>{children}</h1>
    ),
    normal: ({ children }) => (
      <p className='text-2xl text-gray-300'>{children}</p>
    ),
    default: ({ children }) => <p className=''>{children}</p>
  }
}

const PortableTextCard = ({ block, components, className }) => {
  return (
    <CardBase className={className}>
      <PortableText
        value={block.content}
        components={components ?? defaultComponents}
      />
    </CardBase>
  )
}

export default PortableTextCard
