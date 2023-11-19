import Link from 'next/link'

const NavItem = ({ href, onClick, label }) => {
  return (
    <div className='bg-opacity-0 p-4'>
      <Link className='text-3xl bg-opacity-0' onClick={onClick} href={href}>
        <p className='hover:text-indigo-700'>{label}</p>
      </Link>
    </div>
  )
}

export default NavItem
