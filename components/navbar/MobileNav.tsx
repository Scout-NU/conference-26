"use client"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="md:hidden -m-3.5 flex min-h-12 min-w-12 items-center justify-center p-3.5"
          aria-label="Open navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="size-7 text-cream"
          >
            <path d="M20.05 11H3.95C3.42533 11 3 11.4253 3 11.95V12.05C3 12.5747 3.42533 13 3.95 13H20.05C20.5747 13 21 12.5747 21 12.05V11.95C21 11.4253 20.5747 11 20.05 11Z" fill="currentColor" />
            <path d="M20.05 16H3.95C3.42533 16 3 16.4253 3 16.95V17.05C3 17.5747 3.42533 18 3.95 18H20.05C20.5747 18 21 17.5747 21 17.05V16.95C21 16.4253 20.5747 16 20.05 16Z" fill="currentColor" />
            <path d="M20.05 6H3.95C3.42533 6 3 6.42533 3 6.95V7.05C3 7.57467 3.42533 8 3.95 8H20.05C20.5747 8 21 7.57467 21 7.05V6.95C21 6.42533 20.5747 6 20.05 6Z" fill="currentColor" />
          </svg>
        </button>
      </SheetTrigger>
      <SheetContent className="bg-charcoal border-none px-6 pt-6 pb-8">
        <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>

        <div className="flex flex-1 flex-col">
          <SheetClose asChild>
            <Link
              href="/"
              aria-label="Go to home page"
              className="shrink-0 flex items-center"
            >
              <Image
                src="/brand/entangle-logo.webp"
                alt="Entangle Logo"
                width={160}
                height={40}
                priority
                className="h-auto w-[140px] sm:w-[160px]"
              />
            </Link>
          </SheetClose>

          <section className="flex flex-1 flex-col items-center justify-center gap-7 text-center">
            {NavbarLinks.map((link) => (
              <div key={link.name} className="flex flex-col items-center">
                <SheetClose asChild>
                  <Link 
                    href={link.route}
                    className="text-3xl sm:text-4xl leading-none font-[550] lowercase text-cream font-clash py-2 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime"
                  >
                    {link.name}
                  </Link>
                </SheetClose>

                {link.name === "Designathon" && (
                  <SheetClose asChild>
                    <Link
                      href="https://nuhuskies.evenue.net/event/SL2526/SCOUT0322"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mobile-ticket-pulse mt-6 lowercase text-2xl sm:text-3xl font-clash tracking-[-0.264px] font-[550] text-center text-charcoal px-9 py-4 rounded-lg bg-lime inline-block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-charcoal"
                    >
                      Tickets
                    </Link>
                  </SheetClose>
                )}
              </div>
            ))}
          </section>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
