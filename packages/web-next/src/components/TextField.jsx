import { useField } from '../hooks'

const TextField = ({ label, ...props }) => {
  const { type, name } = props
  const { reset: fieldReset, ...field } = useField(type ? type : 'text')

  return (
    <div>
      <label>{label}</label>
      <input name={name ? name : ''} {...field} />
    </div>
  )
}

export default TextField
