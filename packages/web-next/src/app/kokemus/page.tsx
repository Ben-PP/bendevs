'use client'
import sanityClient from '../../sanityClient'
import { ShowcaseCard } from '@/components/cards'
import fetchOptions from '../../utils/fetchOption'
import { JOBS_LIST_ITEMS } from '../../queries'
import ContentPanel from '../../components/panels/ContentPanel'
import { useEffect, useState } from 'react'
import FilteringSidePanel from '../../components/panels/FilteringSidePanel'
import { JobData } from 'types'

const ExperienceView = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [notSelectedTags, setNotSelectedTags] = useState<string[]>([])
  const [experiences, setExperiences] = useState<JobData[]>([])
  const [isFilterHidden, setIsFilterHidden] = useState(true)

  useEffect(() => {
    sanityClient
      .fetch(JOBS_LIST_ITEMS, fetchOptions)
      .then((returnedExperiences: JobData[]) => {
        setExperiences(returnedExperiences)
        const newTags: string[] = []
        returnedExperiences.forEach((experience) => {
          if (!experience.tags) experience.tags = []
          experience.tags.forEach((tag) => {
            if (!newTags.includes(tag)) {
              newTags.push(tag)
            }
          })
        })
        setNotSelectedTags(newTags)
      })
  }, [])

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
    <div className='flex lg:flex-row flex-col w-screen flex-grow'>
      <FilteringSidePanel
        title='Työkokemus'
        handleTagClick={handleTagClick}
        notSelectedTags={notSelectedTags}
        selectedTags={selectedTags}
        setNotSelectedTags={setNotSelectedTags}
        setSelectedTags={setSelectedTags}
        setIsFilterHidden={setIsFilterHidden}
        isFilterHidden={isFilterHidden}
      />
      <ContentPanel backgroundImage='/abstract8.png'>
        {experiences.map((experience) => {
          if (
            experience.tags &&
            (experience.tags.some((tag) => selectedTags.includes(tag)) ||
              selectedTags.length === 0)
          ) {
            return (
              <div key={experience._id} className='p-5 lg:p-20'>
                <ShowcaseCard child={experience} />
              </div>
            )
          }
        })}
      </ContentPanel>
    </div>
  )
}

export default ExperienceView
