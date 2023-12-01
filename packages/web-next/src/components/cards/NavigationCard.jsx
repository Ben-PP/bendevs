import Link from 'next/link'
import { RxArrowRight } from 'react-icons/rx'

const NavigationCard = ({ title, description, className, href }) => {
  return (
    <Link
      href={href}
      className={`${className} flex flex-col justify-end w-full h-full hover:cursor-pointer hover:shadow-hoverfp
      text-center text-indigo-500 hover:text-indigo-700
      rounded-lg bg-black px-5 py-8 lg:p-10`}
    >
      <div className='flex flex-col h-full'>
        <p className='text-xl text-gray-300'>{description}</p>
      </div>
      <div className='flex flex-col flex-grow justify-between items-center h-full '>
        <h1 className='text-4xl mt-8'>{title}</h1>
        <RxArrowRight className='w-full mt-8' size={80} />
      </div>
    </Link>
  )
}

export default NavigationCard
