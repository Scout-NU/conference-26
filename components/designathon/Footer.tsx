import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-indigo px-6 md:px-8 lg:px-[102px] py-10 lg:py-11">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[89px] items-start lg:items-center">
        {/* Branding */}
        <div className="flex flex-col">
          <p className="text-lime text-4xl md:text-6xl lg:text-[85px] leading-tight tracking-tight">
            interventions:
          </p>
          <div className="flex items-end gap-2">
            <div className="w-10 h-10 lg:w-12 lg:h-14 relative">
              {/* Logo placeholder - you can replace with actual logo */}
              <svg
                viewBox="0 0 47 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <circle cx="23.5" cy="27" r="20" stroke="#F3FF85" strokeWidth="3" />
                <circle cx="23.5" cy="27" r="10" fill="#F3FF85" />
              </svg>
            </div>
            <p className="font-clash text-lime text-4xl md:text-6xl lg:text-[93px] leading-tight tracking-tight">
              entangle
            </p>
          </div>
        </div>

        {/* Event Details */}
        <div className="flex flex-col gap-2 text-lime">
          <div className="text-2xl md:text-3xl lg:text-4xl leading-snug tracking-tight">
            <p>March 22nd, 2026</p>
            <p>8:30 am - 5:00 pm</p>
          </div>
          <div className="text-sm md:text-base leading-relaxed mt-2">
            <p>Northeastern University Interdisciplinary Science & Engineering Complex</p>
            <p className="mt-2">805 Columbus Ave Boston, MA 02118 United States</p>
          </div>
        </div>

        {/* Logo and Social */}
        <div className="flex flex-col gap-4 lg:ml-auto">
          {/* Scout Logo Placeholder */}
          <div className="w-32 h-48 lg:w-40 lg:h-60 relative">
            <svg
              viewBox="0 0 160 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect
                x="10"
                y="10"
                width="140"
                height="220"
                rx="8"
                stroke="#F3FF85"
                strokeWidth="2"
              />
              <text
                x="80"
                y="130"
                textAnchor="middle"
                fill="#F3FF85"
                fontSize="20"
                fontFamily="sans-serif"
              >
                SCOUT
              </text>
            </svg>
          </div>

          {/* Social Links */}
          <div>
            <p className="font-clash text-lime text-xl md:text-2xl mb-3">
              Connect with us!
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-lime hover:text-lime/80 transition-colors"
                aria-label="Instagram"
              >
                <BsInstagram className="w-10 h-10 lg:w-12 lg:h-12" />
              </a>
              <a
                href="#"
                className="text-lime hover:text-lime/80 transition-colors"
                aria-label="LinkedIn"
              >
                <BsLinkedin className="w-10 h-10 lg:w-12 lg:h-12" />
              </a>
              <a
                href="#"
                className="text-lime hover:text-lime/80 transition-colors"
                aria-label="Twitter"
              >
                <BsTwitterX className="w-10 h-10 lg:w-12 lg:h-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
