import { getPublishedSpeakerTracks, speakersData } from "./speakersData";
import TrackSection from "@/components/speakers/TrackSection";
import Footer from "@/components/designathon/Footer";
import MobileFooter from "@/components/designathon/MobileFooter";
import Image from "next/image";

export default function Speakers() {
  const publishedTracks = getPublishedSpeakerTracks(speakersData);

  return (
    <div className="relative min-h-screen overflow-hidden bg-charcoal">
      {/* Vector backgrounds - right side */}
      <div className="pointer-events-none absolute right-[-9rem] top-[-6rem] z-0 h-[24rem] w-[28rem] overflow-visible sm:right-[-8rem] sm:top-[-5rem] sm:h-[30rem] sm:w-[34rem] md:right-[-16rem] md:top-[-3rem] md:h-[48rem] md:w-[60rem] xl:right-[-14rem]">
        <Image
          src="/assets/speakers-svgs/vector2.webp"
          alt=""
          fill
          sizes="(min-width: 1280px) 60rem, 90vw"
          className="object-contain object-top-right -translate-y-[1.75rem] translate-x-[1.75rem] scale-[0.95] opacity-65 sm:-translate-y-[2.5rem] sm:translate-x-[2.5rem] sm:scale-[0.9] md:-translate-y-[7rem] md:translate-x-[10rem] md:scale-[0.68] md:opacity-100"
        />
        <Image
          src="/assets/speakers-svgs/vector1.webp"
          alt=""
          fill
          sizes="(min-width: 1280px) 72rem, 90vw"
          className="origin-top-right object-contain object-top-right translate-x-[1rem] translate-y-[4rem] rotate-[2deg] scale-[0.95] opacity-70 sm:translate-x-[6rem] sm:-translate-y-[3.5rem] sm:scale-[1.05] md:translate-x-[17rem] md:translate-y-[-10rem] md:rotate-[3deg] md:scale-[1.5] md:opacity-100 xl:translate-x-[32rem]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-5 py-10 md:px-10 lg:px-[62px]">
        <h1 className="mb-14 mt-16 text-center font-clash text-4xl font-[550] lowercase leading-none tracking-[-0.01em] text-cream sm:text-5xl md:mb-20 md:mt-10 md:text-left lg:mb-50 lg:text-[5.5rem]">
          speakers
        </h1>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-6">
          {publishedTracks.map((track) => (
            <TrackSection
              key={track.name}
              name={track.name}
              img={track.img}
              speakers={track.speakers}
            />
          ))}
        </div>
      </div>
      <div className="mt-12 lg:hidden">
        <MobileFooter />
      </div>
      <div className="mt-12 lg:mt-[25rem] hidden lg:block">
        <Footer />
      </div>
    </div>
  );
}
