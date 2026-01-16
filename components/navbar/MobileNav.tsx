import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { NavbarLinks } from "@/constants";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/hamburger.svg"
          alt="Menu"
          width={36}
          height={36}
          className="md:hidden"
        />
      </SheetTrigger>
      <SheetContent className="bg-[#323232] border-none p-6">
        <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
        
        <Link href="/" className="mb-12 flex items-center">
          <p>Entangle</p>
        </Link>

        <div>
          <section className="flex flex-col gap-12">
            {NavbarLinks.map((link) => (
              <SheetClose
                asChild
                key={link.name}
                className="text-2xl font-bold text-white"
              >
                <Link href={link.route}>
                  <p>{link.name}</p>
                </Link>
              </SheetClose>
            ))}
          </section>

          <SheetClose asChild className="mt-16 block">
            <Link
              href="https://www.eventbrite.com/e/entangle-2024-tickets-747955061117?aff=nextjs"
              target="_blank"
              className="uppercase text-2xl font-dmSans tracking-[-0.264px] font-bold text-center text-black px-8 py-4 rounded-lg bg-[#F3FF85]"
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
