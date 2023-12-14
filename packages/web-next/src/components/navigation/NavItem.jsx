import Link from 'next/link'

const NavItem = ({ href, onClick, label, className }) => {
  return (
    <div className={`${className} bg-opacity-0 p-4`}>
      <Link className='text-3xl bg-opacity-0' onClick={onClick} href={href}>
        <p className='hover:text-secondary-dark'>{label}</p>
      </Link>
    </div>
  )
}

export default NavItem
