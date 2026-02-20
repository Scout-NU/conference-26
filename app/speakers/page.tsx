import { Tracks } from "@/constants";
import TrackSection from "@/components/speakers/TrackSection";
import Image from "next/image";

export default function Speakers() {
  return (
    <div className="relative min-h-screen">
      {/* Vector backgrounds - right side */}
      <div className="absolute top-0 right-0 w-full max-w-[55vw] h-[85vh] min-h-[500px] pointer-events-none -z-10 overflow-hidden hidden md:block">
        <Image
          src="/assets/speakers-svgs/vector2.png"
          alt=""
          fill
          className="object-contain object-top-right scale-80 -rotate-20 translate-x-50 -translate-y-30"
        />
        <Image
            src="/assets/speakers-svgs/vector1.png"
            alt=""
            fill
            className="object-contain object-top-right scale-175 rotate-20 translate-y-30 translate-x-70  origin-top-right xl:translate-y-20 xl:scale-150 xl:translate-x-120 "
          />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-12 lg:px-16 py-4">

      <h1 className="text-center font-clash md:text-left text-6xl font-medium text-[#fffcec] mt-32 md:mt-13 mb-40 max-sm:mb-32 max-sm:text-5xl">
        speakers
      </h1>

      {Tracks.map((track) => (
        <TrackSection
          key={track.name}
          name={track.name}
          trackColor={track.trackColor}
          img={track.img}
          speakers={track.speakers}
        />
      ))}
      </div>
    </div>
  );
  }
