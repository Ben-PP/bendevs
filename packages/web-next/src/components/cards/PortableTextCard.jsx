import PortableText from '@/components/PortableText'
import CardBase from './CardBase'

const PortableTextCard = ({ block, components, className }) => {
  return (
    <CardBase className={className}>
      <PortableText content={block.content} components={components} />
    </CardBase>
  )
}

export default PortableTextCard
