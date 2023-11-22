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
      <h2 className='text-5xl mb-10 text-indigo-500 font-bold'>{child.name}</h2>
      <p className='text-2xl text-gray-300'>{child.shortDescription}</p>
      <div className='flex flex-col lg:flex-row items-center justify-between my-8'>
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
        <div className='w-full lg:w-auto lg:mt-0 mt-10'>
          <button
            className='flex w-full justify-center items-center text-3xl
            text-gray-300 border-gray-300
            hover:text-indigo-700 hover:border-indigo-700 border-2
            rounded-2xl px-4'
          >
            View
            <RxArrowRight size={80} />
          </button>
        </div>
      </div>
    </CardBase>
  )
}

export default ShowcaseCard
