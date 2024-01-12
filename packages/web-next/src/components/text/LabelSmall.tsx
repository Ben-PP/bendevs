import { TextProps } from 'types'

const LabelSmall = ({
  children,
  weight = 'font-normal',
  size = 'text-xl',
  color = 'text-primary',
  margin = '',
  wrap = true
}: TextProps) => {
  return (
    <label
      className={`${size} ${weight} ${color} ${margin} ${
        wrap ? 'overflow-wrap  hyphens-auto text-pretty' : ''
      }`}
    >
      {children}
    </label>
  )
}

export default LabelSmall
