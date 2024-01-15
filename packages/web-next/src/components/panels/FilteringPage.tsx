'use client'
import { useEffect, useState } from 'react'
import { ShowcaseCard } from 'components/cards'
import { FilteringSidePanel, ContentPanel } from 'components/panels'
import { ProjectData, JobData, OrderBy, OrderByField } from 'types'
import { sortBy } from 'lodash'

type FilteringPageProps = {
  items: ProjectData[] | JobData[]
  tags: string[]
  title: string
}

const FilteringPage = ({ items, title, tags }: FilteringPageProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [notSelectedTags, setNotSelectedTags] = useState<string[]>(tags)
  const [isFilterHidden, setIsFilterHidden] = useState(true)
  const [orderBy, setOrderBy] = useState<OrderBy>({
    field: OrderByField.TITLE,
    orderAsc: true
  })

  const sortItems = (items: ProjectData[] | JobData[]) => {
    let sortedItems
    switch (orderBy.field) {
      case OrderByField.TITLE:
        sortedItems = sortBy(items, [
          (item: ProjectData | JobData) => item.title.toLowerCase()
        ])
        break
      case OrderByField.DATE:
        sortedItems = sortBy(items, [
          (item: ProjectData | JobData) =>
            new Date(item.startDate ? item.startDate : '2000-01-01').getTime()
        ])
        break
      default:
        return items
    }
    return orderBy.orderAsc ? sortedItems : sortedItems.reverse()
  }

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
      setNotSelectedTags([...notSelectedTags, tag])
    } else {
      setSelectedTags([...selectedTags, tag])
      setNotSelectedTags(notSelectedTags.filter((t) => t !== tag))
    }
  }

  return (
    <div className='flex lg:flex-row flex-col w-full flex-grow'>
      <FilteringSidePanel
        title={title}
        handleTagClick={handleTagClick}
        notSelectedTags={notSelectedTags}
        selectedTags={selectedTags}
        setNotSelectedTags={setNotSelectedTags}
        setSelectedTags={setSelectedTags}
        setIsFilterHidden={setIsFilterHidden}
        isFilterHidden={isFilterHidden}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />

      <ContentPanel backgroundImage='/abstract8.webp'>
        {sortItems(items).map((item) => {
          if (
            (item.tags &&
              item.tags.some((tag) => selectedTags.includes(tag))) ||
            selectedTags.length === 0
          ) {
            return <ShowcaseCard key={item._id} child={item} />
          }
        })}
      </ContentPanel>
    </div>
  )
}

export default FilteringPage
