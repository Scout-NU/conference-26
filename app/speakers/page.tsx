import { Tracks } from "@/constants";
import SpeakerCard from "../../components/speakers/SpeakerCard";
import TrackSection from "@/components/speakers/TrackSection";

export default function Speakers() {
  return (
    <div className="px-32 max-sm:px-8 py-4 min-h-screen">

      <h1 className="text-center font-clash md:text-left text-8xl font-medium text-[#fffcec] mt-32 md:mt-13 mb-40 max-sm:mb-32 max-sm:text-5xl">speakers</h1>

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
  );
  }
