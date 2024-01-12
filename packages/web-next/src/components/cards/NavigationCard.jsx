import Link from 'next/link'
import { BodyMedium } from '@/components/text'

const NavigationCard = ({ title, description, className, href }) => {
  return (
    <Link
      href={href}
      className={`${className} flex flex-col justify-end w-full h-full hover:cursor-pointer hover:shadow-hoverfp
      text-center text-secondary hover:text-secondary-dark
      rounded-lg bg-card bg-opacity-80 hover:bg-opacity-90 px-5 py-8 lg:p-10`}
    >
      <div className='flex flex-col h-full'>
        <BodyMedium className='text-center' wrap={false}>
          {description}
        </BodyMedium>
      </div>
      <div className='flex flex-row flex-grow justify-center items-center h-full '>
        <h1 className='text-4xl mt-8'>{title}</h1>
      </div>
    </Link>
  )
}

export default NavigationCard
