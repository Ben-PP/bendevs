import { TextProps } from 'types'

const BodyXSmall = ({
  children,
  weight = 'font-normal',
  size = 'text-sm',
  color = 'text-primary-dark',
  margin = '',
  wrap = true
}: TextProps) => {
  return (
    <p
      className={`${size} ${weight} ${color} ${margin} ${
        wrap ? 'overflow-wrap  hyphens-auto text-pretty' : ''
      }`}
    >
      {children}
    </p>
  )
}

export default BodyXSmall
