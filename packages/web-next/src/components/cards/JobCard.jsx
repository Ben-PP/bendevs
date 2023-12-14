import CardBase from './CardBase'
import Tag from '../Tag'

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
      <h2 className='text-5xl mb-8 text-primary-dark font-bold'>
        {job.jobTitle}
      </h2>
      <h3 className='text-3xl  text-secondary mb-5'>{`${startDateString} - ${endDateString}`}</h3>
      <h3 className='text-3xl font-bold text-secondary mb-5'>{job.company}</h3>
      <p className='text-2xl text-primary-dark'>{job.shortDescription}</p>
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
