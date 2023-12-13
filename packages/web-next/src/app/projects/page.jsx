import sanityClient from '../../sanityClient'
import ShowcaseCard from '../../components/cards/ShowcaseCard'
import fetchOptions from '../../utils/fetchOption'
import { PROJECTS_LIST_ITEMS } from '../../queries'
import ContentPanel from '../../components/ContentPanel'
import SidePanel from '../../components/SidePanel'

const ProjectsView = async () => {
  const projects = await sanityClient.fetch(PROJECTS_LIST_ITEMS, fetchOptions)

  return (
    <div className='flex lg:flex-row flex-col w-full flex-grow'>
      <SidePanel>
        <h2 className='text-4xl text-center w-full'>Minun projektit</h2>
      </SidePanel>
      <ContentPanel backgroundImage='/abstract8.png'>
        {projects.map((project) => {
          return (
            <div key={project._id} className='p-5 lg:p-20'>
              <ShowcaseCard key={project._id} child={project} />
            </div>
          )
        })}
      </ContentPanel>
    </div>
  )
}

export default ProjectsView
