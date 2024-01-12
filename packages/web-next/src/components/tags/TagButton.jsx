const TagButton = ({ text, isHollow, onClick }) => {
  const style = isHollow
    ? 'bg-transparent border-2 border-primary hover:border-accent hover:text-secondary'
    : 'bg-accent-dark text-primary hover:bg-accent '

  return (
    <button onClick={onClick} className={`${style} rounded-2xl p-2`}>
      {text}
    </button>
  )
}

export default TagButton
