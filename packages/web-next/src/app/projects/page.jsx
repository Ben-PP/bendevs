import { groq } from 'next-sanity'
import { PortableText } from '@portabletext/react'
import sanityClient from '../../sanityClient'
import ProjectCard from '../../components/ProjectCard'

const query = groq`
  *[_type == "projects"]
`

const getBlocks = async () => {
  const response = await sanityClient.fetch(query)
  return response
}

const ProjectsView = async () => {
  const projects = await getBlocks()

  return (
    <div>
      {projects.map((project) => {
        return <ProjectCard key={project._id} project={project} />
      })}
    </div>
  )
}

export default ProjectsView
