import Image from "next/image";
import { BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";

export default function MobileFooter() {
  return (
    <footer className="relative bg-indigo px-5 py-8 text-cream sm:px-6 sm:py-10 lg:hidden">
      <Image
        className="absolute bottom-full left-0 h-auto w-full"
        src="/images/transitionGradient.webp"
        alt=""
        aria-hidden="true"
        width={1600}
        height={500}
        sizes="100vw"
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6 w-full max-w-[16rem] sm:max-w-[18rem]">
          <Image
            src="/images/Lockup_Light_Subhead.webp"
            alt="Interventions lockup"
            width={1200}
            height={320}
            sizes="(max-width: 640px) 70vw, 18rem"
            className="h-auto w-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-5 sm:gap-6">
          <div className="space-y-2">
            <div className="font-pp-neue text-base font-medium leading-tight tracking-tight sm:text-lg">
              <p>March 22nd, 2026</p>
              <p>8:45 am - 5:00 pm</p>
            </div>
            <div className="font-pp-neue text-xs leading-relaxed text-cream/95 sm:text-sm">
              <p>Northeastern University Interdisciplinary Science &amp; Engineering Complex</p>
              <p className="mt-1">805 Columbus Ave Boston, MA 02118 United States</p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-3">
            <Image
              src="/brand/Lockup4.svg"
              alt="Scout lockup"
              width={251}
              height={57}
              sizes="120px"
              className="h-auto w-28 sm:w-32"
            />
            <p className="font-pp-neue text-sm font-medium sm:text-base">connect with us!</p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/interventionsbyscout/"
                className="rounded-sm p-1 transition-colors hover:text-cream/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70"
                aria-label="Instagram"
              >
                <BsInstagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/scout-conference/"
                className="rounded-sm p-1 transition-colors hover:text-cream/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70"
                aria-label="LinkedIn"
              >
                <BsLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.tiktok.com/@interventions.scout"
                className="rounded-sm p-1 transition-colors hover:text-cream/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream/70"
                aria-label="TikTok"
              >
                <BsTiktok className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
