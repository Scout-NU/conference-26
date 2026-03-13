import { BsInstagram, BsLinkedin, BsTiktok } from "react-icons/bs";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-indigo px-24 py-16">
      <Image
        className="absolute left-0 bottom-full w-full h-auto"
        src="/images/transitionGradient.webp"
        alt=""
        aria-hidden="true"
        width={1600}
        height={500}
        sizes="100vw"
      />
      <div className="flex flex-col lg:flex-row gap-24 ">
        {/* Branding */}
        <div className="w-150">
          <Image
            src="/images/Lockup_Light_Subhead.png"
            alt="Interventions lockup"
            width={1200}
            height={320}
            sizes="(max-width: 1024px) 90vw, 38rem"
            className="h-auto w-full"
          />
        </div>

        {/* Event Details */}
        <div className="w-150 flex flex-col gap-2 text-cream">
          <div className="font-pp-neue font-medium text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight">
            <p>March 22nd, 2026</p>
            <p>8:45 am - 5:00 pm</p>
          </div>
          <div className="font-pp-neue text-lg leading-relaxed mt-2">
            <p>Northeastern University Interdisciplinary Science & Engineering Complex</p>
            <p className="mt-2">805 Columbus Ave Boston, MA 02118 United States</p>
          </div>
        </div>

        {/* Logo and Social */}
        <div className=" text-cream w-80 flex flex-col gap-4 lg:ml-auto">
          <Image
            src="/brand/Lockup4.svg"
            alt="Scout lockup"
            width={251}
            height={57}
            sizes="251px"
            className="h-auto w-auto"
          />
        <div>
          <p className="font-pp-neue font-medium text-xl mb-3">
              connect with us!
          </p>
          <div className="flex gap-4">
            <a
                href="https://www.instagram.com/interventionsbyscout/"
              className="hover:text-cream/80 transition-colors"
              aria-label="Instagram"
            >
              <BsInstagram className="w-8 h-8" />
            </a>
            <a
                href="https://www.linkedin.com/in/scout-conference/"
              className="hover:text-cream/80 transition-colors"
              aria-label="LinkedIn"
            >
              <BsLinkedin className="w-8 h-8" />
            </a>
            <a
                href="https://www.tiktok.com/@interventions.scout"
              className="hover:text-cream/80 transition-colors"
                aria-label="TikTok"
            >
                <BsTiktok className="w-8 h-8" />
            </a>
          </div>
        </div>
                </div>
    </div>
    </footer >
  );
}
