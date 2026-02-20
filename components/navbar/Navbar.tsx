import { NavbarLinks } from '@/constants'
import Link from 'next/link'
import { NavLink } from './NavLink'
import MobileNav from './MobileNav'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center w-full bg-charcoal px-12 max-sm:px-6 py-2'>
      <div className='flex justify-center items-center text-cream font-clash font-medium text-[24px]'>
        <Image
          src="/assets/logo.png"
          alt="Entangle Logo"
          width={64}
          height={64}
        />
        <h1>entangle</h1>
      </div>
      <div className='flex justify-between items-center gap-16 h-full'>

        {NavbarLinks.map((link) => (
          <NavLink key={link.name} href={link.route}>
            {link.name}
          </NavLink>
        ))}

        <div className='relative inline-block'>
          <Link
            href="https://www.eventbrite.com/e/entangle-2024-tickets-747955061117?aff=nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className='relative hidden md:flex text-xl lg:text-2xl font-clash tracking-[-0.264px] font-medium text-center text-lime '
          >
            Tickets
          </Link>
          <img 
            src="/assets/tickets-vector.svg" 
            alt="Ticket Vector" 
            className="absolute left-1/2 -translate-x-1/2 -translate-y-[65%] w-[150%] max-w-none pointer-events-none" 
          />
        </div>


        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
