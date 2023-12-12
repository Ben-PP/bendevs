import Tag from './Tag'

const TagList = ({ tags }) => {
  return (
    <ul className='flex flex-grow-1 justify-center flex-wrap space-x-3'>
      {tags.map((tag) => {
        return (
          <div key={tag} className='mb-2'>
            <Tag text={tag} />
          </div>
        )
      })}
    </ul>
  )
}

export default TagList
