import TagButton from './TagButton'
import { TitleXSmall, BodyXSmall } from '../text'

const Tags = ({ tags, title }) => {
  return (
    <>
      <TitleXSmall margin='my-4'>{title}</TitleXSmall>
      {tags.length > 0 && (
        <div className='flex flex-wrap justify-center lg:justify-start '>
          {...tags}
        </div>
      )}
      {tags.length === 0 && <BodyXSmall>Tyhjä</BodyXSmall>}
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
    <div className='text-center lg:text-left'>
      <Tags title='Valitut' tags={createTagList(selectedTags, false)} />

      <Tags title='Tagit' tags={createTagList(notSelectedTags, true)} />
    </div>
  )
}

export default TagSorter
