import { PortableText } from '@/components/text'
import { PortableTextBlock } from '@portabletext/types'
import CardBase from './CardBase'

interface PortableTextCardProps {
  contentBlocks: PortableTextBlock[]
  components?: any
  margin?: string
  className?: string
}

const PortableTextCard = ({
  contentBlocks,
  components,
  margin,
  className
}: PortableTextCardProps) => {
  return (
    <CardBase className={className} margin={margin}>
      <PortableText content={contentBlocks} components={components} />
    </CardBase>
  )
}

export default PortableTextCard
