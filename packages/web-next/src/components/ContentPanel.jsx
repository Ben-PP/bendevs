const ContentPanel = ({ children, backgroundImage }) => {
  return (
    <div
      className='w-full bg-cover bg-center'
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      {children}
    </div>
  )
}

export default ContentPanel
