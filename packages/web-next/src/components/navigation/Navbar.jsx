import Link from 'next/link'

const Navbar = () => {
  const navItemStyle = 'm-2'
  return (
    <div
      className={`
        sticky top-0 w-full flex justify-between bg-black text-white
      `}
    >
      <Link className={navItemStyle} href='/'>
        Karel Parkkola
      </Link>
      <div className='flex justify-end'>
        <Link className={navItemStyle} href='/about'>
          About
        </Link>
        <Link className={navItemStyle} href='/projects'>
          Projects
        </Link>
        <Link className={navItemStyle} href='/experience'>
          Experience
        </Link>
        <Link className={navItemStyle} href='/contact'>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Navbar
