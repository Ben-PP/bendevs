import { TitleSmall } from '@/components/text'

type FooterColumnProps = {
  title: string
  children: React.ReactNode
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className='flex flex-col px-10'>
      <div className='text-center sm:text-start'>
        <TitleSmall weight='font-bold' color='text-secondary'>
          {title}
        </TitleSmall>
      </div>
      <div className='flex flex-col mt-5 text-center sm:text-start'>
        {children}
      </div>
    </div>
  )
}

export default FooterColumn
