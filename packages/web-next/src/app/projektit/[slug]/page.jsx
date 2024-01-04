import { PROJECTS_LIST_ITEMS, PROJECT_FROM_SLUG } from '../../../queries'
import sanityClient from '../../../sanityClient'
import fetchOptions from '../../../utils/fetchOption'

export async function generateStaticParams() {
  const projects = await sanityClient.fetch(PROJECTS_LIST_ITEMS, fetchOptions)

  return projects.map((project) => ({
    slug: project.slug.current,
    project: project
  }))
}

const ProjectView = async ({ params }) => {
  const project = await sanityClient.fetch(PROJECT_FROM_SLUG, fetchOptions)
  console.log('params', project)
  return (
    <div>
      <h1>{project.name}</h1>
    </div>
  )
}

export default ProjectView
