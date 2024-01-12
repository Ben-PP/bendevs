import { TextProps } from 'types'

const LabelMedium = ({
  children,
  weight = 'font-normal',
  size = 'text-2xl',
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

export default LabelMedium
