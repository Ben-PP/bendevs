import sanityClient from '../../sanityClient'
import ShowcaseCard from '../../components/ShowcaseCard'
import fetchOptions from '../../utils/fetchOption'
import { PROJECTS_LIST_ITEMS } from '../../queries'

const ProjectsView = async () => {
  const projects = await sanityClient.fetch(PROJECTS_LIST_ITEMS, fetchOptions)

  return (
    <div>
      {projects.map((project) => {
        return <ShowcaseCard key={project._id} child={project} />
      })}
    </div>
  )
}

export default ProjectsView
