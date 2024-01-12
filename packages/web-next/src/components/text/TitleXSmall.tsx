import { TextProps } from './types'

const TitleXSmall = ({
  children,
  weight = 'font-normal',
  size = 'text-lg',
  color = 'text-primary-dark',
  margin = '',
  wrap = true
}: TextProps) => {
  return (
    <h5
      className={`${size} ${weight} ${color} ${margin} ${
        wrap ? 'overflow-wrap  hyphens-auto text-pretty' : ''
      }`}
    >
      {children}
    </h5>
  )
}

export default TitleXSmall
