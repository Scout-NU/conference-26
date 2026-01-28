import { NavbarLinks } from '@/constants'
import Link from 'next/link'
import { NavLink } from './NavLink'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full bg-charcoal px-3 md:px-6 py-2'>
      <div className='text-cream font-clash font-bold text-xl'>
        Entangle
      </div>
      <div className='flex justify-between items-center gap-16'>
        
        {NavbarLinks.map((link) => (
          <NavLink key={link.name} href={link.route}>
            {link.name}
          </NavLink>
        ))}

        <Link
          href="https://www.eventbrite.com/e/entangle-2024-tickets-747955061117?aff=nextjs"
          target="_blank"
          className='hidden md:flex uppercase text-xl lg:text-2xl font-clash tracking-[-0.264px] font-bold text-center text-charcoal px-8 py-4 rounded-lg bg-lime'
        >
          Tickets
        </Link>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
