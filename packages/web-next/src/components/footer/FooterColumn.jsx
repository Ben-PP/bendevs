const FooterColumn = ({ title, children }) => {
  return (
    <div className='flex flex-col px-10'>
      <div className='text-secondary text-2xl font-bold'>{title}</div>
      <div className='flex flex-col mt-5'>{children}</div>
    </div>
  )
}

export default FooterColumn
