import sanityClient from '../../sanityClient'
import ShowcaseCard from '../../components/cards/ShowcaseCard'
import fetchOptions from '../../utils/fetchOption'
import { PROJECTS_LIST_ITEMS } from '../../queries'

const ProjectsView = async () => {
  const projects = await sanityClient.fetch(PROJECTS_LIST_ITEMS, fetchOptions)

  return (
    <div className='flex flex-row flex-wrap justify-center m-4'>
      {projects.map((project) => {
        return (
          <div
            key={project._id}
            className='lg:w-2/5 lg:w-max-3/4 flex-grow lg:m-8 mb-16'
          >
            <ShowcaseCard key={project._id} child={project} />
          </div>
        )
      })}
    </div>
  )
}

export default ProjectsView
