'use client'
import { useState, useEffect } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import NavItem from './NavItem'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' }
]

const MobileMenu = ({ onPageSelect }) => {
  return (
    <div className='flex flex-col items-center justify-start  bg-gray-800 text-white shadow-nav h-full'>
      {menuItems.map((item) => {
        return (
          <NavItem
            onClick={onPageSelect}
            href={item.href}
            key={item.href}
            label={item.label}
          />
        )
      })}
    </div>
  )
}

const FullMenu = () => {
  return (
    <div className='flex flex-row'>
      {menuItems.map((item) => {
        return <NavItem href={item.href} key={item.href} label={item.label} />
      })}
    </div>
  )
}

const Navbar = ({ height }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
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
    <div className='fixed top-0 w-full h-full'>
      <div
        className={`
      flex px-4 items-center justify-between bg-black text-white ${height}
      `}
      >
        <NavItem href='/' label='Bendevs'></NavItem>
        {isMobile ? (
          <div className=' flex flex-col items-end'>
            <button
              className='text-white focus:outline-none'
              onClick={() => setShowMenu(!showMenu)}
            >
              <RxHamburgerMenu size={50} />
            </button>
          </div>
        ) : (
          <FullMenu />
        )}
      </div>
      {showMenu ? <MobileMenu onPageSelect={onPageSelect} /> : null}
    </div>
  )
}

export default Navbar
