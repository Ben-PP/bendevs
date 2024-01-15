import SidePanel from './SidePanel'
import { TagSelector } from 'components/tags'
import { TitleMedium, TitleSmall } from 'components/text'
import { Button } from 'components/buttons'
import { RxArrowUp, RxArrowDown } from 'react-icons/rx'
import { ButtonSize, OrderBy, OrderByField } from 'types'
import { Divider, WhiteBox } from 'components/dividers'

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
  orderBy: OrderBy
  setOrderBy: (orderBy: OrderBy) => void
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
      <div
        className='
      flex flex-row items-center justify-center lg:justify-start
      '
      >
        <TitleSmall weight='font-bold'>Suodata</TitleSmall>
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
      <Divider />
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
  isFilterHidden,
  orderBy,
  setOrderBy
}: FilteringSidePanelProps) => {
  return (
    <SidePanel>
      <div
        className='
          lg:sticky top-16 left-0 text-center lg:text-left px-4 py-4 lg:px-6
          lg:py-10
        '
      >
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

        <div className={`lg:inline-block ${isFilterHidden ? 'hidden' : ''}`}>
          <div
            className='
          flex flex-row mt-10 items-center justify-center lg:justify-start
          '
          >
            <TitleMedium margin='mr-3'>Järjestä</TitleMedium>
            <Button
              text={orderBy.orderAsc ? 'Nouseva' : 'Laskeva'}
              onClick={() =>
                setOrderBy({ ...orderBy, orderAsc: !orderBy.orderAsc })
              }
              size={ButtonSize.SMALL}
              icon={orderBy.orderAsc ? <RxArrowUp /> : <RxArrowDown />}
            />
          </div>
          <Divider />
          <div className='flex flex-row justify-center lg:justify-start mt-5'>
            <Button
              text='Otsikko'
              onClick={() =>
                setOrderBy({ ...orderBy, field: OrderByField.TITLE })
              }
              isHollow={orderBy.field !== OrderByField.TITLE}
            />
            <WhiteBox />
            <Button
              text='Päivämäärä'
              onClick={() =>
                setOrderBy({ ...orderBy, field: OrderByField.DATE })
              }
              isHollow={orderBy.field !== OrderByField.DATE}
            />
          </div>
        </div>
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
