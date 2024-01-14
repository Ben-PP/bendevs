import TagButton from './TagButton'
import { TitleXSmall, TitleSmall, BodyXSmall } from '../text'

type TagsProps = {
  tags: JSX.Element[]
  title: string
}

const Tags = ({ tags, title }: TagsProps) => {
  return (
    <>
      <TitleSmall color='text-primary-dark' margin='my-4'>
        {title}
      </TitleSmall>
      {tags.length > 0 && (
        <div className='flex flex-wrap justify-center lg:justify-start '>
          {...tags}
        </div>
      )}
      {tags.length === 0 && <BodyXSmall>Tyhjä</BodyXSmall>}
    </>
  )
}

type TagSorterProps = {
  handleTagClick: (tag: string) => void
  selectedTags: string[]
  notSelectedTags: string[]
}

const TagSorter = ({
  handleTagClick,
  selectedTags,
  notSelectedTags
}: TagSorterProps) => {
  const createTagList = (tags: string[], isHollow?: boolean) => {
    return tags.sort().map((tag) => {
      return (
        <div key={tag} className='mx-2 my-2'>
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
      <Tags title='Valitut' tags={createTagList(selectedTags)} />

      <Tags title='Tagit' tags={createTagList(notSelectedTags, true)} />
    </div>
  )
}

export default TagSorter
