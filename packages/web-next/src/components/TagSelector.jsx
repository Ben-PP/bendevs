import TagButton from './TagButton'

const Tags = ({ tags, title }) => {
  return (
    <>
      <h4 className='text-lg mt-3 text-primary-dark'>{title}</h4>
      {tags.length > 0 && <div className='flex flex-wrap '>{...tags}</div>}
      {tags.length === 0 && <p className='text-sm text-primary-dark'>Tyhjä</p>}
    </>
  )
}

const TagSorter = ({ handleTagClick, selectedTags, notSelectedTags }) => {
  const createTagList = (tags, isHollow) => {
    return tags.sort().map((tag) => {
      return (
        <div key={tag} className='mx-1 my-1'>
          <TagButton
            isHollow={isHollow}
            text={tag}
            onClick={() => handleTagClick(tag)}
          />
        </div>
      )
    })
  }

  return (
    <div className=''>
      <Tags title='Valitut' tags={createTagList(selectedTags, false)} />

      <Tags title='Tagit' tags={createTagList(notSelectedTags, true)} />
    </div>
  )
}

export default TagSorter
