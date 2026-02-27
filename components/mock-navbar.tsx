import Link from "next/link";

const navLinks = [
  { href: "/schedule", label: "Schedule" },
  { href: "/speakers", label: "Speakers" },
  { href: "/designathon", label: "Designathon" },
  { href: "/tickets", label: "Tickets" },
] as const;

export function MockNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/20 backdrop-blur-sm">
      <nav className="mx-auto flex h-[105px] max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-medium tracking-tight text-black"
        >
          Entangle
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-4 py-2 text-center text-xl font-medium text-black transition-colors hover:text-black/70"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu placeholder - to be implemented */}
        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-md md:hidden"
          aria-label="Open menu"
        >
          <svg
            className="size-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
}
