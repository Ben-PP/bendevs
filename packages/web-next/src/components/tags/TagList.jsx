import Tag from './Tag'

const TagList = ({ tags }) => {
  return (
    <ul className='flex flex-grow-1 justify-center flex-wrap space-x-4'>
      {tags.map((tag) => {
        return (
          <div key={tag} className='mb-4'>
            <Tag text={tag} />
          </div>
        )
      })}
    </ul>
  )
}

export default TagList
