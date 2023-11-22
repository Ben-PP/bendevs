const CardBase = ({ children, style, ...props }) => {
  return (
    <div
      className={`p-10 rounded-lg text-center bg-black text-white shadow-card ${style}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default CardBase
