type FooterColumnItemProps = {
  children: React.ReactNode
}

const FooterColumnItem = ({ children }: FooterColumnItemProps) => {
  return (
    <div className='text-primary-dark hover:text-secondary my-2'>
      {children}
    </div>
  )
}

export default FooterColumnItem
