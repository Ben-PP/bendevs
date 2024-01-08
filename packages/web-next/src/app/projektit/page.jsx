'use client'
import { useEffect, useState, Button } from 'react'
import sanityClient from '../../sanityClient'
import ShowcaseCard from '../../components/cards/ShowcaseCard'
import fetchOptions from '../../utils/fetchOption'
import { PROJECTS_LIST_ITEMS } from '../../queries'
import ContentPanel from '../../components/ContentPanel'
import SidePanel from '../../components/SidePanel'
import TagSelector from '../../components/TagSelector'

const ProjectsView = () => {
  const [selectedTags, setSelectedTags] = useState([])
  const [notSelectedTags, setNotSelectedTags] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {
    sanityClient
      .fetch(PROJECTS_LIST_ITEMS, fetchOptions)
      .then((returnedProjects) => {
        setProjects(returnedProjects)
        const newTags = []
        returnedProjects.forEach((project) => {
          project.tags.forEach((tag) => {
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
    <div className='flex lg:flex-row flex-col w-full flex-grow'>
      <SidePanel>
        <h2 className='text-4xl text-left w-full'>Minun projektit</h2>
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
        {projects &&
          projects.map((project) => {
            if (
              project.tags.some((tag) => selectedTags.includes(tag)) ||
              selectedTags.length === 0
            ) {
              return (
                <div key={project._id} className='p-5 lg:p-20'>
                  <ShowcaseCard key={project._id} child={project} />
                </div>
              )
            }
          })}
      </ContentPanel>
    </div>
  )
}

export default ProjectsView
