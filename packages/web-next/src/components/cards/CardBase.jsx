const CardBase = ({ children, className, ...props }) => {
  return (
    <div
      className={`${className} px-5 py-8 lg:p-10 rounded-lg bg-black text-white shadow-card`}
      {...props}
    >
      {children}
    </div>
  )
}

export default CardBase
