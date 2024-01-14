import sanityClient from 'sanityClient'
import fetchOptions from 'utils/fetchOption'
import { PROJECTS_LIST_ITEMS } from 'queries'
import { ProjectData } from 'types'
import { FilteringPage } from 'components/panels'

const ProjectsView = async () => {
  const projects: ProjectData[] = await sanityClient.fetch(
    PROJECTS_LIST_ITEMS,
    fetchOptions
  )
  const tags: string[] = []
  projects.forEach((project) => {
    if (!project.tags) project.tags = []
    project.tags.forEach((tag) => {
      if (!tags.includes(tag)) {
        tags.push(tag)
      }
    })
  })

  return <FilteringPage title='Minun projektit' items={projects} tags={tags} />
}

export default ProjectsView
