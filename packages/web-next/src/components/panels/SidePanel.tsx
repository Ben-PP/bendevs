type SidePanelProps = {
  children: React.ReactNode
}

const SidePanel = ({ children }: SidePanelProps) => {
  return (
    <div className='w-full lg:w-1/3 flex flex-col text-primary'>{children}</div>
  )
}

export default SidePanel
