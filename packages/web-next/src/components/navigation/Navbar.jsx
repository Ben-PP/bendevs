'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const navItemStyle = 'm-2'
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!isMobile) {
    return (
      <div
        className={`
      sticky top-0 w-full flex justify-between bg-black text-white
      `}
      >
        <Link className={navItemStyle} href='/'>
          Bendevs
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
  } else {
    return <div>test</div>
  }
}

export default Navbar
