'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { RxHamburgerMenu } from 'react-icons/rx'
import NavItem from './NavItem'

type MenuItem = {
  href: string
  label: string
}

interface MenuProps {
  pathname: string
}

interface MobileMenuProps extends MenuProps {
  onPageSelect: () => void
}

type NavbarProps = {
  height: string
}

const menuItems: MenuItem[] = [
  { href: '/tietoa/', label: 'Tietoa' },
  { href: '/projektit/', label: 'Projektit' },
  { href: '/kokemus/', label: 'Työkokemus' },
  { href: '/yhteys/', label: 'Ota yhteyttä' }
]

const getColor = (pathname: string, href: string) => {
  const selectedStyle = 'text-secondary'
  return pathname === `${href}` ? selectedStyle : undefined
}

const MobileMenu = ({ onPageSelect, pathname }: MobileMenuProps) => {
  return (
    <div className='flex flex-col items-center justify-start  bg-secondary shadow-nav h-full '>
      {menuItems.map((item) => {
        return (
          <NavItem
            onClick={onPageSelect}
            href={item.href}
            key={item.href}
            label={item.label}
            color={getColor(pathname, item.href)}
          />
        )
      })}
    </div>
  )
}

const FullMenu = ({ pathname }: MenuProps) => {
  return (
    <div className='flex flex-row '>
      {menuItems.map((item) => {
        return (
          <NavItem
            href={item.href}
            key={item.href}
            label={item.label}
            color={getColor(pathname, item.href)}
          />
        )
      })}
    </div>
  )
}

const Navbar = ({ height }: NavbarProps) => {
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
          color={getColor(pathname, '/')}
          onClick={onPageSelect}
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
