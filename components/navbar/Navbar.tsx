"use client"

import { NavbarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'

const Navbar = () => {

  const pathname = usePathname();

  console.log(pathname)

  return (
    <nav className='flex justify-between items-center w-full bg-[#323232] px-5.75 py-8 '>
      <div>
        Entangle
      </div>
      <div className='flex justify-between items-center gap-16'>
        
        {NavbarLinks.map((link) => (
          <Link key={link.name} href={link.route} className={`relative uppercase text-2xl font-dmSans tracking-[-0.264px] font-bold text-center text-[#FFFCEC] ${pathname === link.route ? "underline decoration-[#F3FF85] decoration-3 underline-offset-8" : ""} max-sm:hidden`}>
            {link.name}
            {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-[#F3FF85]"></span> */}
          </Link>
        ))}

        <Link href="https://www.eventbrite.com/e/entangle-2024-tickets-747955061117?aff=nextjs" target="_blank" className='uppercase text-2xl font-dmSans tracking-[-0.264px] font-bold text-center text-black px-8 py-4 rounded-lg bg-[#F3FF85]'>
          Tickets
        </Link>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar