import sanityClient from '../../sanityClient'
import JobCard from '../../components/cards/JobCard'
import fetchOptions from '../../utils/fetchOption'
import { JOBS_LIST_ITEMS } from '../../queries'

const ExperienceView = async () => {
  const experiences = await sanityClient.fetch(JOBS_LIST_ITEMS, fetchOptions)

  return (
    <div className='flex flex-row flex-wrap justify-center m-4'>
      {experiences.map((experience) => {
        return (
          <div
            key={experience._id}
            className='lg:w-2/5 lg:w-max-3/4 flex-grow lg:m-8 mb-16'
          >
            <JobCard job={experience} />
          </div>
        )
      })}
    </div>
  )
}

export default ExperienceView
