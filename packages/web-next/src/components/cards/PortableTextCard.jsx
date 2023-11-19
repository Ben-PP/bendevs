import { PortableText } from '@portabletext/react'

const defaultComponents = {
  block: {
    h1: ({ children }) => <h1 className='text-5xl mb-10'>{children}</h1>,
    normal: ({ children }) => (
      <p className='text-2xl text-gray-500'>{children}</p>
    ),
    default: ({ children }) => <p className=''>{children}</p>
  }
}

const PortableTextCard = ({ block, components }) => {
  return (
    <div
      className='p-10 rounded-lg text-center bg-black text-white
      shadow-lg'
    >
      <PortableText
        value={block.content}
        components={components ?? defaultComponents}
      />
    </div>
  )
}

export default PortableTextCard
