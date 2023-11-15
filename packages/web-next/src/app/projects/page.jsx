import { groq } from 'next-sanity'
import sanityClient from '../../sanityClient'
import ProjectCard from '../../components/ProjectCard'
import fetchOptions from '../../utils/fetchOption'

const query = groq`
  *[_type == "projects"]
`

const getBlocks = async () => {
  const response = await sanityClient.fetch(query, fetchOptions)
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
