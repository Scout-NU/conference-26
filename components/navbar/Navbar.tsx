import { NavbarLinks } from '@/constants'
import Link from 'next/link'
import { NavLink } from './NavLink'
import MobileNav from './MobileNav'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 flex w-full items-center justify-between bg-charcoal px-12 pb-5 pt-4 max-sm:px-6 md:pb-6'>
      <Link
        href="/"
        aria-label="Go to home page"
        className='flex items-center'
      >
        <Image
          src="/brand/entangle-logo.png"
          alt="Entangle Logo"
          width={160}
          height={40}
          priority
          className="h-auto w-[140px] sm:w-[160px]"
        />
      </Link>
      <div className='flex justify-between items-center gap-16 h-full'>

        {NavbarLinks.map((link) => (
          <NavLink key={link.name} href={link.route}>
            {link.name}
          </NavLink>
        ))}

        <div className='relative inline-block'>
          <Link
            href="https://nuhuskies.evenue.net/event/SL2526/SCOUT0322"
            target="_blank"
            rel="noopener noreferrer"
            className='relative hidden md:flex text-xl lg:text-2xl font-clash tracking-[-0.264px] font-medium text-center text-lime '
          >
            Tickets
          </Link>
          <Image
            src="/assets/tickets-vector.svg"
            alt="Ticket Vector"
            width={300}
            height={96}
            sizes="300px"
            className="absolute left-1/2 -translate-x-1/2 -translate-y-[65%] w-[150%] h-auto max-w-none pointer-events-none"
          />
        </div>


        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar
