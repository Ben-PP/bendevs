import { TextProps } from './types'

const TitleMedium = ({
  children,
  weight = 'font-normal',
  size = 'text-4xl',
  color = 'text-primary',
  margin = '',
  wrap = true
}: TextProps) => {
  return (
    <h2
      className={`${size} ${weight} ${color} ${margin} ${
        wrap ? 'overflow-wrap  hyphens-auto text-pretty' : ''
      }`}
    >
      {children}
    </h2>
  )
}

export default TitleMedium
