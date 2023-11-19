import { PortableText } from '@portabletext/react'

const defaultComponents = {
  block: {
    h1: ({ children }) => <h1 className='text-3xl'>{children}</h1>,
    default: ({ children }) => <p>{children}</p>
  }
}
//
const style = `
  lg:w-3/4 lg:mx-0 w-full p-4 rounded-lg
  text-center
  bg-black text-white
  shadow-lg
`

const PortableTextCard = ({ block, components }) => {
  console.log(block)
  return (
    <div className={style}>
      <PortableText
        value={block.content}
        components={components ?? defaultComponents}
      />
    </div>
  )
}

export default PortableTextCard
