import { RxArrowRight } from 'react-icons/rx'
import { PortableText } from '@/components/text'
import CardBase from './CardBase'
import Tag from '../tags/Tag'
import { TitleLarge, TitleSmall } from '@/components/text'
import { ShocaseCardChild } from 'types'

type ShowcaseCardProps = {
  child: ShocaseCardChild
}

/**
 * Showcase something with a title, description and tags!
 * @param {Object} child Child with name, shortDescription and tags fields
 * @returns {ReactElement} Component showcasing the child
 */
const ShowcaseCard = ({ child }: ShowcaseCardProps) => {
  const startDate = child.startDate ? new Date(child.startDate) : null
  const endDate = child.endDate ? new Date(child.endDate) : null
  const endDateString = endDate
    ? `${endDate.getMonth() + 1}/${endDate.getFullYear()}`
    : startDate
    ? 'now'
    : ''
  const startDateString = startDate
    ? `${startDate.getMonth() + 1}/${startDate.getFullYear()}`
    : ''

  return (
    <CardBase>
      <TitleLarge color='text-secondary' weight='font-bold' margin='mb-10'>
        {child.title}
      </TitleLarge>
      {startDate && (
        <TitleSmall
          color='text-secondary'
          margin='mb-5'
        >{`${startDateString} - ${endDateString}`}</TitleSmall>
      )}
      {'company' in child && (
        <TitleSmall weight='font-bold' color='text-secondary' margin='mb-5'>
          {child.company}
        </TitleSmall>
      )}
      <PortableText content={child.description} />
      <div className='flex flex-col lg:flex-row items-center justify-between mt-8'>
        <div className='flex-col overflow-y-auto'>
          <ul className='flex flex-grow-1 justify-center flex-wrap space-x-3'>
            {child.tags &&
              child.tags.map((tag) => {
                return (
                  <div key={tag} className='mb-2'>
                    <Tag text={tag} />
                  </div>
                )
              })}
          </ul>
        </div>
      </div>
      {/* TODO Convert these to a button */}
      {'github' in child && 'availableAt' in child && (
        <div className='flex flex-col lg:flex-row justify-evenly mt-8'>
          {child.github && (
            <a
              href={child.github}
              target='blank'
              className='
            flex justify-center items-center border-2 rounded-lg px-5 py-2
            hover:text-secondary hover:border-secondary
            '
            >
              <p className='text-xl'>Github</p>
              <RxArrowRight className='ml-2' size={40} />
            </a>
          )}
          {child.availableAt && (
            <a
              href={child.availableAt}
              target='blank'
              className='
          flex justify-center items-center border-2 rounded-lg px-5 py-2
          mt-5 lg:mt-0 hover:text-secondary hover:border-secondary
          '
            >
              <p className='text-xl'>Kokeile</p>
              <RxArrowRight className='ml-2' size={40} />
            </a>
          )}
        </div>
      )}
    </CardBase>
  )
}

export default ShowcaseCard
