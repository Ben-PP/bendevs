import Link from 'next/link'
import { BodyMedium } from '@/components/text'
import { RxArrowRight } from 'react-icons/rx'

interface NavigationCardProps {
  title: string
  description: string
  href: string
}

const NavigationCard = ({ title, description, href }: NavigationCardProps) => {
  return (
    <Link
      href={href}
      className={`flex flex-col justify-end w-full h-full hover:cursor-pointer hover:shadow-hoverfp
      text-center text-secondary hover:text-secondary-dark
      rounded-lg bg-card bg-opacity-90 hover:bg-opacity-100 px-5 py-8 lg:p-10`}
    >
      <div className='flex flex-col h-full'>
        <BodyMedium wrap={false}>{description}</BodyMedium>
      </div>
      <div className='flex flex-row flex-grow justify-center items-center h-full flex-wrap'>
        <h1 className='text-4xl'>{title}</h1>
        <RxArrowRight size={60} className='flex-shrink-0' />
      </div>
    </Link>
  )
}

export default NavigationCard
