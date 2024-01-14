import { TextProps } from 'types'

const BodyMedium = ({
  children,
  weight = 'font-normal',
  size = 'text-lg',
  color = 'text-primary-dark',
  margin = '',
  wrap = true
}: TextProps) => {
  return (
    <p
      className={`${size} ${weight} ${color} ${margin} ${
        wrap ? 'break-words  hyphens-auto text-pretty' : ''
      }`}
    >
      {children}
    </p>
  )
}

export default BodyMedium
