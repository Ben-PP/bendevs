import { TextProps } from 'types'

const TitleLarge = ({
  children,
  weight = 'font-normal',
  size = 'text-4xl',
  color = 'text-primary',
  margin = '',
  wrap = true
}: TextProps) => {
  return (
    <h1
      className={`${size} ${weight} ${color} ${margin} ${
        wrap ? 'overflow-wrap  hyphens-auto text-pretty' : ''
      }`}
    >
      {children}
    </h1>
  )
}

export default TitleLarge
