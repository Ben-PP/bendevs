'use client'
import sanityClient from '../../sanityClient'
import JobCard from '../../components/cards/JobCard'
import fetchOptions from '../../utils/fetchOption'
import { JOBS_LIST_ITEMS } from '../../queries'
import ContentPanel from '../../components/ContentPanel'
import { useEffect, useState } from 'react'
import FilteringSidePanel from '../../components/FilteringSidePanel'

const ExperienceView = () => {
  const [selectedTags, setSelectedTags] = useState([])
  const [notSelectedTags, setNotSelectedTags] = useState([])
  const [experiences, setExperiences] = useState([])
  const [isFilterHidden, setIsFilterHidden] = useState(true)

  useEffect(() => {
    sanityClient
      .fetch(JOBS_LIST_ITEMS, fetchOptions)
      .then((returnedExperiences) => {
        setExperiences(returnedExperiences)
        const newTags = []
        returnedExperiences.forEach((experience) => {
          experience.tags.forEach((tag) => {
            if (!newTags.includes(tag)) {
              newTags.push(tag)
            }
          })
        })
        setNotSelectedTags(newTags)
      })
  }, [])

  const handleTagClick = (tag) => {
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
      {/*<SidePanel>
        <h2 className='text-4xl text-center lg:text-left w-full p-4 lg:p-0 lg:pt-10'>
          Työkokemus
        </h2>
        <div class={`lg:inline-block ${isFilterHidden ? 'hidden' : ''}`}>
          <div className='flex flex-row justify-center lg:justify-start items-center w-full mt-10'>
            <h3 className='text-2xl text-left'>Suodata</h3>
            <button
              className='bg-accent-dark hover:bg-accent text-white rounded-lg px-3 py-1 ml-3'
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
      </SidePanel>
      <button
        className='lg:hidden text-rigth bg-accent-dark text-primary text-3xl py-5'
        onClick={() => setIsFilterHidden(!isFilterHidden)}
      >
        {isFilterHidden ? 'Näytä suodatin' : 'Piilota suodatin'}
      </button>*/}
      <ContentPanel backgroundImage='/abstract8.png'>
        {experiences.map((experience) => {
          if (
            experience.tags.some((tag) => selectedTags.includes(tag)) ||
            selectedTags.length === 0
          ) {
            return (
              <div key={experience._id} className='p-5 lg:p-20'>
                <JobCard job={experience} />
              </div>
            )
          }
        })}
      </ContentPanel>
    </div>
  )
}

export default ExperienceView
