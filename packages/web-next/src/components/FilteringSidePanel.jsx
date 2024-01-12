import SidePanel from './SidePanel'
import TagSelector from './TagSelector'
import { h1 } from './text'
const Filter = ({
  handleTagClick,
  notSelectedTags,
  selectedTags,
  setNotSelectedTags,
  setSelectedTags,
  isFilterHidden
}) => {
  return (
    <div class={`lg:inline-block ${isFilterHidden ? 'hidden' : ''}`}>
      <div>
        <h3>Suodata</h3>
        <button
          onClick={() => {
            setNotSelectedTags([...selectedTags, ...notSelectedTags])
            setSelectedTags([])
          }}
        >
          Tyhjennä
        </button>
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
}) => {
  return (
    <SidePanel>
      <div>
        <h2>{title}</h2>
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
