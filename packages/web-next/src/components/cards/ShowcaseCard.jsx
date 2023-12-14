import { RxArrowRight } from 'react-icons/rx'
import CardBase from './CardBase'
import Tag from '../Tag'

const defaultComponents = {
  block: {
    h1: ({ children }) => <h1 className='text-5xl mb-10'>{children}</h1>,
    normal: ({ children }) => (
      <p className='text-2xl text-gray-500'>{children}</p>
    ),
    default: ({ children }) => <p className=''>{children}</p>
  }
}

/**
 * Showcase something with a title, description and tags!
 * @param {Object} child Child with name, shortDescription and tags fields
 * @returns {ReactElement} Component showcasing the child
 */
const ShowcaseCard = ({ icon, child }) => {
  return (
    <CardBase>
      <h2 className='text-5xl mb-10 text-secondary font-bold'>{child.name}</h2>
      <p className='text-2xl text-primary-dark'>{child.shortDescription}</p>
      <div className='flex flex-col lg:flex-row items-center justify-between mt-8'>
        <div className='flex-col overflow-y-auto'>
          <ul className='flex flex-grow-1 justify-center flex-wrap space-x-3'>
            {child.tags.map((tag) => {
              return (
                <div key={tag} className='mb-2'>
                  <Tag text={tag} />
                </div>
              )
            })}
          </ul>
        </div>
        <div className='w-full lg:w-auto lg:mt-0 mt-8'>
          <button
            className='flex w-full justify-center items-center text-3xl
            text-primary-dark border-primary-dark
            hover:text-secondary-dark hover:border-secondary-dark border-2
            rounded-2xl px-4'
          >
            Tutustu
            <RxArrowRight size={80} />
          </button>
        </div>
      </div>
    </CardBase>
  )
}

export default ShowcaseCard
