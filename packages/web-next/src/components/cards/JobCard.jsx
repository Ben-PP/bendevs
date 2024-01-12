import CardBase from './CardBase'
import Tag from '../tags/Tag'
import { TitleLarge, TitleSmall, BodyMedium } from '@/components/text'

const JobCard = ({ job }) => {
  const startDate = new Date(job.startDate)
  const endDate = job.endDate ? new Date(job.endDate) : null
  const endDateString = endDate
    ? `${endDate.getMonth() + 1}/${endDate.getFullYear()}`
    : 'now'
  const startDateString = `${
    startDate.getMonth() + 1
  }/${startDate.getFullYear()}`
  return (
    <CardBase>
      <TitleLarge margin='mb-8' color='text-primary-dark' weight='font-bold'>
        {job.jobTitle}
      </TitleLarge>
      <TitleSmall
        color='text-secondary'
        margin='mb-5'
      >{`${startDateString} - ${endDateString}`}</TitleSmall>
      <TitleSmall weight='font-bold' color='text-secondary' margin='mb-5'>
        {job.company}
      </TitleSmall>
      <BodyMedium>{job.shortDescription}</BodyMedium>
      <div
        className='flex flex-col items-start justify-between
      my-8 overflow-y-auto'
      >
        <ul className='flex flex-grow-1 justify-center flex-wrap space-x-3'>
          {job.tags.map((tag) => {
            return (
              <div key={tag} className='mb-2'>
                <Tag text={tag} />
              </div>
            )
          })}
        </ul>
      </div>
    </CardBase>
  )
}

export default JobCard
