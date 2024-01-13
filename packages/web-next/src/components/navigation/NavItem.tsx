import Link from 'next/link'

type NavItemProps = {
  href: string
  onClick?: () => void
  label: string
  color?: string
}

const NavItem = ({ href, onClick, label, color = '' }: NavItemProps) => {
  return (
    <div className={`${color} bg-opacity-0 p-4`}>
      <Link className='text-3xl bg-opacity-0' onClick={onClick} href={href}>
        <p className='hover:text-secondary-dark'>{label}</p>
      </Link>
    </div>
  )
}

export default NavItem
