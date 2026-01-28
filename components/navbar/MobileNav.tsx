"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavbarLinks } from "@/constants";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="md:hidden p-2 -m-2"
          aria-label="Open navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-6 text-cream"
          >
            <path d="M20.05 11H3.95C3.42533 11 3 11.4253 3 11.95V12.05C3 12.5747 3.42533 13 3.95 13H20.05C20.5747 13 21 12.5747 21 12.05V11.95C21 11.4253 20.5747 11 20.05 11Z" fill="currentColor" />
            <path d="M20.05 16H3.95C3.42533 16 3 16.4253 3 16.95V17.05C3 17.5747 3.42533 18 3.95 18H20.05C20.5747 18 21 17.5747 21 17.05V16.95C21 16.4253 20.5747 16 20.05 16Z" fill="currentColor" />
            <path d="M20.05 6H3.95C3.42533 6 3 6.42533 3 6.95V7.05C3 7.57467 3.42533 8 3.95 8H20.05C20.5747 8 21 7.57467 21 7.05V6.95C21 6.42533 20.5747 6 20.05 6Z" fill="currentColor" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent className="bg-charcoal border-none p-6">
        <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
        
        <Link href="/" className="mb-12 flex items-center text-cream font-clash font-bold text-xl">
          Entangle
        </Link>

        <div>
          <section className="flex flex-col gap-6">
            {NavbarLinks.map((link) => (
              <SheetClose
                asChild
                key={link.name}
              >
                <Link 
                  href={link.route}
                  className="text-2xl font-bold text-cream font-clash py-3"
                >
                  {link.name}
                </Link>
              </SheetClose>
            ))}
          </section>

          <SheetClose asChild className="mt-16 block">
            <Link
              href="https://www.eventbrite.com/e/entangle-2024-tickets-747955061117?aff=nextjs"
              target="_blank"
              className="uppercase text-2xl font-clash tracking-[-0.264px] font-bold text-center text-charcoal px-8 py-4 rounded-lg bg-lime inline-block"
            >
              Tickets
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
