'use client'
import { useEffect, useState } from 'react'
import sanityClient from '../../sanityClient'
import ShowcaseCard from '../../components/cards/ShowcaseCard'
import fetchOptions from '../../utils/fetchOption'
import { PROJECTS_LIST_ITEMS } from '../../queries'
import ContentPanel from '../../components/panels/ContentPanel'
import FilteringSidePanel from '../../components/panels/FilteringSidePanel'
import { ProjectData } from 'types'

const ProjectsView = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [notSelectedTags, setNotSelectedTags] = useState<string[]>([])
  const [projects, setProjects] = useState<ProjectData[]>([])
  const [isFilterHidden, setIsFilterHidden] = useState(true)

  useEffect(() => {
    sanityClient
      .fetch(PROJECTS_LIST_ITEMS, fetchOptions)
      .then((returnedProjects: ProjectData[]) => {
        setProjects(returnedProjects)
        const newTags: string[] = []
        returnedProjects.forEach((project) => {
          if (!project.tags) project.tags = []
          project.tags.forEach((tag) => {
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
