'use client'
import { useState } from 'react'
import { ProjectData, JobData } from 'types'
import { ShowcaseCard } from '@/components/cards'
import { FilteringSidePanel, ContentPanel } from '@/components/panels'

type FilteringPageProps = {
  items: ProjectData[] | JobData[]
  tags: string[]
  title: string
}

const FilteringPage = ({ items, title, tags }: FilteringPageProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [notSelectedTags, setNotSelectedTags] = useState<string[]>(tags)
  const [isFilterHidden, setIsFilterHidden] = useState(true)

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
      />

      <ContentPanel backgroundImage='/abstract8.png'>
        {
          <div className='h-full'>
            {items.map((item) => {
              if (
                (item.tags &&
                  item.tags.some((tag) => selectedTags.includes(tag))) ||
                selectedTags.length === 0
              ) {
                return (
                  <div key={item._id} className='p-5 lg:p-20'>
                    <ShowcaseCard key={item._id} child={item} />
                  </div>
                )
              }
            })}
          </div>
        }
      </ContentPanel>
    </div>
  )
}

export default FilteringPage
