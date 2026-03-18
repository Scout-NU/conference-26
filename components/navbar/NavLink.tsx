"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  
  return (
    <Link
      href={href}
      className="relative hidden md:block text-xl lg:text-2xl font-clash lowercase tracking-[-0.264px] font-[550] text-center text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
    >
      <span>{children}</span>
      {isActive ? (
        <Image
          src="/assets/nav-underline-squiggle.svg"
          alt=""
          aria-hidden="true"
          width={77}
          height={10}
          className="pointer-events-none absolute left-1/2 top-[calc(100%+6px)] h-auto w-[77px] -translate-x-1/2"
        />
      ) : null}
    </Link>
  )
}
