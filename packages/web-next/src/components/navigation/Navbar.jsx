'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const navItemStyle = 'm-2'
  const [isMobile, setIsMobile] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

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

  const onPageSelect = () => {
    setShowMenu(false)
  }

  return (
    <div className='sticky top-0 w-full'>
      <div
        className={`
      flex justify-between bg-black text-white
      `}
      >
        <Link className={navItemStyle} href='/'>
          Bendevs
        </Link>
        {isMobile ? (
          <div className='m-2 flex flex-col items-end'>
            <button
              className='text-white focus:outline-none'
              onClick={() => setShowMenu(!showMenu)}
            >
              {/* Mobile menu icon */}
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                ></path>
              </svg>
            </button>
          </div>
        ) : (
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
        )}
      </div>
      {showMenu ? (
        <div className='flex flex-col items-center bg-gray-800 text-white shadow-nav '>
          <Link onClick={onPageSelect} className={navItemStyle} href='/about'>
            About
          </Link>
          <Link
            onClick={onPageSelect}
            className={navItemStyle}
            href='/projects'
          >
            Projects
          </Link>
          <Link
            onClick={onPageSelect}
            className={navItemStyle}
            href='/experience'
          >
            Experience
          </Link>
          <Link onClick={onPageSelect} className={navItemStyle} href='/contact'>
            Contact
          </Link>
        </div>
      ) : null}
    </div>
  )
}

export default Navbar
