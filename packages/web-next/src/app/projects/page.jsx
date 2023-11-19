import sanityClient from '../../sanityClient'
import ShowcaseCard from '../../components/cards/ShowcaseCard'
import fetchOptions from '../../utils/fetchOption'
import { PROJECTS_LIST_ITEMS } from '../../queries'

const ProjectsView = async () => {
  const projects = await sanityClient.fetch(PROJECTS_LIST_ITEMS, fetchOptions)

  return (
    <div>
      {projects.map((project) => {
        return <ShowcaseCard key={project._id} child={project} />
      })}
      <h3 className='text-4xl text-shadow-md shadow-white'>Test</h3>
    </div>
  )
}

export default ProjectsView
