import { TextProps } from './types'

const BodySmall = ({
  children,
  weight = 'font-normal',
  size = 'text-xl',
  color = 'text-primary',
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

export default BodySmall
