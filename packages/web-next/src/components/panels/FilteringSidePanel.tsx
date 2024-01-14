import SidePanel from './SidePanel'
import { TagSelector } from 'components/tags'
import { TitleMedium, TitleSmall } from 'components/text'
import { Button } from 'components/buttons'
import { ButtonSize } from 'types'

interface FilterProps {
  handleTagClick: (tag: string) => void
  notSelectedTags: string[]
  selectedTags: string[]
  setNotSelectedTags: (tags: string[]) => void
  setSelectedTags: (tags: string[]) => void
  isFilterHidden: boolean
}

interface FilteringSidePanelProps extends FilterProps {
  title: string
  setIsFilterHidden: (isHidden: boolean) => void
  isFilterHidden: boolean
}

const Filter = ({
  handleTagClick,
  notSelectedTags,
  selectedTags,
  setNotSelectedTags,
  setSelectedTags,
  isFilterHidden
}: FilterProps) => {
  return (
    <div
      className={`
      lg:inline-block ${isFilterHidden ? 'hidden' : ''}
      mt-10
    `}
    >
      <div className='flex flex-row items-center justify-center lg:justify-start'>
        <TitleSmall>Suodata</TitleSmall>
        <div className='px-2'></div>
        <Button
          text='Tyhjennä'
          size={ButtonSize.SMALL}
          onClick={() => {
            setNotSelectedTags([...selectedTags, ...notSelectedTags])
            setSelectedTags([])
          }}
        />
      </div>
      <TagSelector
        handleTagClick={handleTagClick}
        notSelectedTags={notSelectedTags}
        selectedTags={selectedTags}
      />
    </div>
  )
}

const FilteringSidePanel = ({
  title,
  handleTagClick,
  notSelectedTags,
  selectedTags,
  setNotSelectedTags,
  setSelectedTags,
  setIsFilterHidden,
  isFilterHidden
}: FilteringSidePanelProps) => {
  return (
    <SidePanel>
      <div className='lg:sticky top-16 left-0 text-center lg:text-left px-4 py-4 lg:px-6 lg:py-10'>
        <TitleMedium margin='' wrap={false}>
          {title}
        </TitleMedium>
        <Filter
          handleTagClick={handleTagClick}
          notSelectedTags={notSelectedTags}
          selectedTags={selectedTags}
          setNotSelectedTags={setNotSelectedTags}
          setSelectedTags={setSelectedTags}
          isFilterHidden={isFilterHidden}
        />
      </div>
      <button
        className='lg:hidden text-rigth bg-accent-dark text-primary text-3xl py-5'
        onClick={() => setIsFilterHidden(!isFilterHidden)}
      >
        {isFilterHidden ? 'Näytä suodatin' : 'Piilota suodatin'}
      </button>
    </SidePanel>
  )
}

export default FilteringSidePanel
