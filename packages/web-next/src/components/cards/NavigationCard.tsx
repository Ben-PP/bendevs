import Link from 'next/link'
import { BodyMedium } from '@/components/text'

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
      rounded-lg bg-card bg-opacity-80 hover:bg-opacity-90 px-5 py-8 lg:p-10`}
    >
      <div className='flex flex-col h-full'>
        <BodyMedium wrap={false}>{description}</BodyMedium>
      </div>
      <div className='flex flex-row flex-grow justify-center items-center h-full '>
        <h1 className='text-4xl mt-8'>{title}</h1>
      </div>
    </Link>
  )
}

export default NavigationCard
