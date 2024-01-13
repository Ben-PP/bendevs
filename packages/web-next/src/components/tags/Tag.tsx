type TagProps = {
  text: string
}

const Tag = ({ text }: TagProps) => {
  return (
    <div className='bg-accent-dark text-primary rounded-2xl p-2'>
      <p>{text}</p>
    </div>
  )
}

export default Tag
