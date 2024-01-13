import { PortableText } from '@/components/text'
import { PortableTextBlock } from '@portabletext/types'
import CardBase from './CardBase'

interface PortableTextCardProps {
  contentBlocks: PortableTextBlock[]
  components?: any
  className?: string
}

const PortableTextCard = ({
  contentBlocks,
  components,
  className
}: PortableTextCardProps) => {
  return (
    <CardBase className={className}>
      <PortableText content={contentBlocks} components={components} />
    </CardBase>
  )
}

export default PortableTextCard
