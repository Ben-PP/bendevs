import BeatLoader from 'react-spinners/BeatLoader'
import { ButtonSize, ButtonType } from 'types'
import React from 'react'

export interface ButtonProps {
  text: string
  icon?: React.ReactNode
  onClick?: () => void
  type?: ButtonType
  size?: ButtonSize
  isLoading?: boolean
  isHollow?: boolean
}

const Button = ({
  text,
  icon,
  onClick,
  type,
  size,
  isLoading = false,
  isHollow = false
}: ButtonProps) => {
  const style = isHollow
    ? 'bg-transparent border-2 border-primary hover:border-accent hover:text-secondary'
    : 'bg-accent-dark text-primary hover:bg-accent '

  let sizeStyle = 'p-2'
  switch (size) {
    case ButtonSize.SMALL:
      sizeStyle = 'py-1 px-3 text-md rounded-lg'
      break
    case ButtonSize.MEDIUM:
      sizeStyle = 'p-2'
      break
    case ButtonSize.LARGE:
      sizeStyle = 'py-3 px-4 text-3xl'
      break
    default:
      break
  }

  return (
    <button
      className={`${style} ${sizeStyle} rounded-xl`}
      type={type}
      onClick={onClick}
    >
      <div className='flex flex-row items-center justify-center'>
        {isLoading ? <BeatLoader color='white' /> : text}
        <div className='pl-3'>{icon && icon}</div>
      </div>
    </button>
  )
}

export default Button
