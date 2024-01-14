type CardBaseProps = {
  children: React.ReactNode
  className?: string
  margin?: string
}

const CardBase = ({
  children,
  className,
  margin = 'm-5',
  ...props
}: CardBaseProps) => {
  return (
    <div
      className={`${className} ${margin} 
        2xl:w-2/3
        px-5 py-8 lg:p-10 rounded-lg bg-card bg-opacity-90 overflow-y-auto
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default CardBase
