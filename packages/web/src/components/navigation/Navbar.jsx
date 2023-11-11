import { Link } from 'react-router-dom'

const Navbar = () => {
  const navItemStyle = ''
  return (
    <div className='sticky w-full bg-green-300 flex justify-between'>
      <Link className={navItemStyle} to='/'>
        Karel Parkkola
      </Link>
      <div className='flex justify-end'>
        <Link className={navItemStyle} to='/about'>
          About
        </Link>
        <Link className={navItemStyle} to='/projects'>
          Projects
        </Link>
        <Link className={navItemStyle} to='/experience'>
          Experience
        </Link>
        <Link className={navItemStyle} to='/contact'>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar
