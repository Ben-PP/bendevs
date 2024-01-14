import sanityClient from 'sanityClient'
import fetchOptions from 'utils/fetchOption'
import { PROJECTS_LIST_ITEMS } from 'queries'
import { Metadata } from 'next'
import { FilteringPage } from 'components/panels'
import { ProjectData } from 'types'

export const metadata: Metadata = {
  title: 'Bendevs | Projektit',
  description: `Tällä sivulla voit tutustua henkilön Karel Parkkola
  projekteihin. Karel on tehnyt monenlaisia projekteja mobiilisovelluksista
  verkkosivuihin ja web-sovelluksiin. Projekteissa on käytetty esimerkiksi
  Flutteria, Reactia, Pythonia, TypeScriptiä ja Dartia.`
}

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
