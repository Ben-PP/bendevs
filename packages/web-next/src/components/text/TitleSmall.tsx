import { TextProps } from 'types'

const TitleSmall = ({
  children,
  weight = 'font-normal',
  size = 'text-3xl',
  color = 'text-primary',
  margin = '',
  wrap = true
}: TextProps) => {
  return (
    <h3
      className={`${size} ${weight} ${color} ${margin} ${
        wrap ? 'overflow-wrap  hyphens-auto text-pretty' : ''
      }`}
    >
      {children}
    </h3>
  )
}

export default TitleSmall
