'use client'
import { useEffect, useState, Button } from 'react'
import sanityClient from '../../sanityClient'
import ShowcaseCard from '../../components/cards/ShowcaseCard'
import fetchOptions from '../../utils/fetchOption'
import { PROJECTS_LIST_ITEMS } from '../../queries'
import ContentPanel from '../../components/panels/ContentPanel'
import FilteringSidePanel from '../../components/panels/FilteringSidePanel'

const ProjectsView = () => {
  const [selectedTags, setSelectedTags] = useState([])
  const [notSelectedTags, setNotSelectedTags] = useState([])
  const [projects, setProjects] = useState([])
  const [isFilterHidden, setIsFilterHidden] = useState(true)

  useEffect(() => {
    sanityClient
      .fetch(PROJECTS_LIST_ITEMS, fetchOptions)
      .then((returnedProjects) => {
        setProjects(returnedProjects)
        const newTags = []
        returnedProjects.forEach((project) => {
          if (!project.tags) return
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
      <FilteringSidePanel
        title='Minun projektit'
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
          Minun projektit
        </h2>
        <div class={`lg:inline-block ${isFilterHidden ? 'hidden' : ''}`}>
          <div
            className='
          flex flex-row justify-center lg:justify-start items-center w-full
          mt-10
        '
          >
            <h3 className='text-2xl'>Suodata</h3>
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
        {projects &&
          projects.map((project) => {
            if (
              (project.tags &&
                project.tags.some((tag) => selectedTags.includes(tag))) ||
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
