import sanityClient from '../../sanityClient'
import JobCard from '../../components/cards/JobCard'
import fetchOptions from '../../utils/fetchOption'
import { JOBS_LIST_ITEMS } from '../../queries'
import SidePanel from '../../components/SidePanel'
import ContentPanel from '../../components/ContentPanel'

const ExperienceView = async () => {
  const experiences = await sanityClient.fetch(JOBS_LIST_ITEMS, fetchOptions)

  return (
    <div className='flex lg:flex-row flex-col w-screen flex-grow'>
      <SidePanel>
        <h2 className='text-4xl text-center'>Työkokemus</h2>
      </SidePanel>
      <ContentPanel backgroundImage='/abstract8.png'>
        {experiences.map((experience) => {
          return (
            <div key={experience._id} className='p-5 lg:p-20'>
              <JobCard job={experience} />
            </div>
          )
        })}
      </ContentPanel>
    </div>
  )
}

export default ExperienceView
