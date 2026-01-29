import { Tracks } from "@/constants";
import SpeakerCard from "../../components/speakers/SpeakerCard";
import TrackSection from "@/components/speakers/TrackSection";

export default function Speakers() {
  return (
    <div className="px-32 py-32 min-h-screen">

      <h1 className="text-center md:text-left text-8xl font-bold text-[#fffcec] mb-64 max-sm:mb-32 max-sm:text-5xl">Speakers</h1>

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
