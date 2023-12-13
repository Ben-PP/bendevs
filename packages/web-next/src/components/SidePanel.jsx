const SidePanel = ({ children }) => {
  return (
    <div className='w-full lg:w-1/3 flex flex-col bg-gray-800 p-10 text-white'>
      {children}
    </div>
  )
}

export default SidePanel
