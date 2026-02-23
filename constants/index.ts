export interface NavLink {
  name: string
  route: string
}

export const NavbarLinks: NavLink[] = [
  { name: 'Schedule', route: '/schedule' },
  { name: 'Speakers', route: '/speakers' },
  { name: 'Designathon', route: '/designathon' },
]