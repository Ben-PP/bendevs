const SidePanel = ({ children }) => {
  return (
    <div className='w-full lg:w-1/3 flex flex-col p-10 text-primary'>
      {children}
    </div>
  )
}

export default SidePanel
