const FooterColumn = ({ title, children }) => {
  return (
    <div className='flex flex-col px-10'>
      <div className='text-secondary text-2xl font-bold text-center sm:text-start'>
        {title}
      </div>
      <div className='flex flex-col mt-5 text-center sm:text-start'>
        {children}
      </div>
    </div>
  )
}

export default FooterColumn
