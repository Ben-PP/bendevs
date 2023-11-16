import sanityClient from '../../sanityClient'
import ShowcaseCard from '../../components/ShowcaseCard'
import fetchOptions from '../../utils/fetchOption'
import { JOBS_LIST_ITEMS } from '../../queries'

const ExperienceView = async () => {
  const experiences = await sanityClient.fetch(JOBS_LIST_ITEMS, fetchOptions)

  return (
    <div>
      {experiences.map((experience) => {
        return <ShowcaseCard key={experience._id} child={experience} />
      })}
    </div>
  )
}

export default ExperienceView
