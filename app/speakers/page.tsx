import { Tracks } from "@/constants";
import TrackSection from "@/components/speakers/TrackSection";

export default function Speakers() {
  return (
    <div className="px-32 max-sm:px-8 py-20 min-h-screen">

      <h1 className="text-center md:text-left text-8xl font-bold text-[#fffcec] mt-32 md:mt-80 mb-64 max-sm:mb-32 max-sm:text-5xl">speakers</h1>

      {Tracks.map((track) => (
        <TrackSection
          key={track.name}
          name={track.name}
          speakers={track.speakers}
        />
      ))}
    </div>
  );
  }
