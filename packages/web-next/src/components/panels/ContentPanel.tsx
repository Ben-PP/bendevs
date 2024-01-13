type ContentPanelProps = {
  children: React.ReactNode
  backgroundImage: string
}

const ContentPanel = ({ children, backgroundImage }: ContentPanelProps) => {
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
