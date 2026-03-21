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
      <div className="pointer-events-none absolute right-[-16rem] top-[-3rem] z-0 hidden h-[48rem] w-[60rem] overflow-visible md:block xl:right-[-14rem]">
        <Image
          src="/assets/speakers-svgs/vector2.webp"
          alt=""
          fill
          sizes="(min-width: 1280px) 60rem, 90vw"
          className="object-contain object-top-right -translate-y-[7rem] translate-x-[10rem] -rotate-[0deg] scale-[0.68]"
        />
        <Image
          src="/assets/speakers-svgs/vector1.webp"
          alt=""
          fill
          sizes="(min-width: 1280px) 72rem, 90vw"
          className="origin-top-right object-contain object-top-right translate-x-[17rem] translate-y-[-10rem] rotate-[3deg] scale-[1.5] xl:translate-x-[32rem]"
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
      <div className="mt-12 lg:mt-[25rem] hidden lg:block md:block">
        <Footer />
      </div>
    </div>
  );
}
