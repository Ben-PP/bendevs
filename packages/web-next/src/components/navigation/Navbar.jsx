'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from 'react-icons/rx'
import NavItem from './NavItem'

const menuItems = [
  { href: '/tietoa', label: 'Tietoa' },
  { href: '/projektit', label: 'Projektit' },
  { href: '/kokemus', label: 'Työkokemus' },
  { href: '/yhteys', label: 'Ota yhteyttä' }
]
const selectedStyle = 'text-secondary'

const MobileMenu = ({ onPageSelect, pathname }) => {
  return (
    <div className='flex flex-col items-center justify-start  bg-secondary shadow-nav h-full '>
      {menuItems.map((item) => {
        return (
          <NavItem
            onClick={onPageSelect}
            href={item.href}
            key={item.href}
            label={item.label}
            className={pathname === `${item.href}/` ? selectedStyle : null}
          />
        )
      })}
    </div>
  )
}

const FullMenu = ({ pathname }) => {
  return (
    <div className='flex flex-row '>
      {menuItems.map((item) => {
        return (
          <NavItem
            href={item.href}
            key={item.href}
            label={item.label}
            className={pathname === `${item.href}/` ? selectedStyle : null}
          />
        )
      })}
    </div>
  )
}

const Navbar = ({ height }) => {
  const [showMenu, setShowMenu] = useState(false)
  const pathname = usePathname()

  const onPageSelect = () => {
    setShowMenu(false)
  }

  return (
    <div
      className={`bg-tertiary fixed top-0 w-full ${showMenu ? 'h-full' : ''}`}
    >
      <div
        className={`
      flex px-4 items-center justify-between  text-primary-dark ${height}
      `}
      >
        <NavItem
          href='/'
          label='Bendevs'
          className={pathname === '/' ? selectedStyle : null}
        ></NavItem>

        <div className={'lg:hidden flex flex-col items-end'}>
          <button
            className='text-primary-dark focus:outline-none'
            onClick={() => setShowMenu(!showMenu)}
          >
            <RxHamburgerMenu size={50} />
          </button>
        </div>
        <div className='hidden lg:block'>
          <FullMenu pathname={pathname} />
        </div>
      </div>
      {showMenu ? (
        <MobileMenu onPageSelect={onPageSelect} pathname={pathname} />
      ) : null}
    </div>
  )
}

export default Navbar
