import { HiArrowRight } from "react-icons/hi";

export default function HeroSection() {
  return (
    <section className="px-6 md:px-8 lg:px-[136px] py-12 lg:py-[51px]">
      <h1 className="font-clash text-5xl md:text-7xl lg:text-[100px] text-cream leading-tight tracking-tight">
        designathon
      </h1>
      <div className="mt-6 lg:mt-[25px]">
        <a
          href="#register"
          className="inline-flex items-center gap-3 px-8 py-3 border-[1.5px] border-cream rounded-full text-cream font-clash text-lg md:text-2xl transition-colors hover:bg-cream/10"
        >
          Register Now
          <HiArrowRight className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>
    </section>
  );
}
