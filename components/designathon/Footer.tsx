import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="relative bg-indigo px-24 py-16">
      <img className="absolute left-0 bottom-full" src="/images/transitionGradient.png"></img>
      <div className="flex flex-col lg:flex-row gap-24 ">
        {/* Branding */}
        <div className="w-150">
          <img src="/brand/Lockup_Light_Interventions.png" />
        </div>

        {/* Event Details */}
        <div className="w-150 flex flex-col gap-2 text-cream">
          <div className="font-medium text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight">
            <p>March 22nd, 2026</p>
            <p>8:30 am - 5:00 pm</p>
          </div>
          <div className="font-pp-neue text-lg leading-relaxed mt-2">
            <p>Northeastern University Interdisciplinary Science & Engineering Complex</p>
            <p className="mt-2">805 Columbus Ave Boston, MA 02118 United States</p>
          </div>
        </div>

        {/* Logo and Social */}
        <div className=" text-cream w-80 flex flex-col gap-4 lg:ml-auto">
          <img className="" src="/brand/Lockup4.svg" />
        <div>
          <p className="font-pp-neue font-medium text-xl mb-3">
            Connect with us!
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-cream/80 transition-colors"
              aria-label="Instagram"
            >
              <BsInstagram className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="hover:text-cream/80 transition-colors"
              aria-label="LinkedIn"
            >
              <BsLinkedin className="w-8 h-8" />
            </a>
            <a
              href="#"
              className="hover:text-cream/80 transition-colors"
              aria-label="Twitter"
            >
              <BsTwitterX className="w-8 h-8" />
            </a>
          </div>
        </div>
                </div>
    </div>
    </footer >
  );
}
