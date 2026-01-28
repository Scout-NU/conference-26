"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

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
      className={`relative uppercase text-xl lg:text-2xl font-clash tracking-[-0.264px] font-semibold text-center text-cream ${isActive ? "underline decoration-lime decoration-3 underline-offset-8" : ""} hidden md:block`}
    >
      {children}
    </Link>
  )
}
