import BeatLoader from 'react-spinners/BeatLoader'

const Button = ({ text, onClick, type, isHollow, size, isLoading }) => {
  const style = isHollow
    ? 'bg-transparent border-2 border-primary hover:border-accent hover:text-secondary'
    : 'bg-accent-dark text-primary hover:bg-accent '

  let sizeStyle = 'p-2'
  switch (size) {
    case 'sm':
      sizeStyle = 'p-1'
      break
    case 'md':
      sizeStyle = 'p-2'
      break
    case 'lg':
      sizeStyle = 'py-3 px-4 text-3xl'
      break
    default:
      break
  }
  console.log(isLoading)

  return (
    <button
      className={`${style} ${sizeStyle} rounded-2xl`}
      type={type ? type : ''}
      onClick={onClick}
    >
      {isLoading ? <BeatLoader color='white' /> : text}
    </button>
  )
}

export default Button
