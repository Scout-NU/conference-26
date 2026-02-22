import { speakersData } from "./speakersData";
import TrackSection from "@/components/speakers/TrackSection";
import Image from "next/image";

export default function Speakers() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-charcoal">
      {/* Vector backgrounds - right side */}
      <div className="pointer-events-none absolute right-[-8rem] z-0 hidden h-[56rem] w-[72rem] overflow-visible md:block">
        <Image
          src="/assets/speakers-svgs/vector2.png"
          alt=""
          fill
          sizes="(min-width: 1280px) 72rem, 90vw"
          className="object-contain object-top-right -translate-y-[2rem] translate-x-[8rem] -rotate-[20deg] scale-[0.95]"
        />
        <Image
          src="/assets/speakers-svgs/vector1.png"
          alt=""
          fill
          sizes="(min-width: 1280px) 72rem, 90vw"
          className="origin-top-right object-contain object-top-right translate-x-[19rem] translate-y-[12rem] rotate-[22deg] scale-[1.55] xl:translate-x-[30rem]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 md:px-12 lg:px-20">
        <h1 className="mb-14 mt-16 text-center font-clash text-[clamp(3rem,7vw,6.25rem)] font-medium lowercase leading-[1] text-cream md:mb-20 md:mt-10 md:text-left lg:mb-50">
          speakers
        </h1>

        {speakersData.map((track) => (
          <TrackSection
            key={track.name}
            name={track.name}
            img={track.img}
            speakers={track.speakers}
          />
        ))}
      </div>
    </div>
  );
}
