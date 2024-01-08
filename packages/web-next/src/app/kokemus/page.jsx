'use client'
import sanityClient from '../../sanityClient'
import JobCard from '../../components/cards/JobCard'
import fetchOptions from '../../utils/fetchOption'
import { JOBS_LIST_ITEMS } from '../../queries'
import SidePanel from '../../components/SidePanel'
import ContentPanel from '../../components/ContentPanel'
import { useEffect, useState } from 'react'
import TagSelector from '../../components/TagSelector'

const ExperienceView = () => {
  const [selectedTags, setSelectedTags] = useState([])
  const [notSelectedTags, setNotSelectedTags] = useState([])
  const [experiences, setExperiences] = useState([])

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
      <SidePanel>
        <h2 className='text-4xl text-center'>Työkokemus</h2>
        <div className='flex flex-row justify-start items-center w-full mt-10'>
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
      </SidePanel>
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
