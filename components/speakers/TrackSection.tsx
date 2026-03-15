import type { Speaker } from "@/app/speakers/speakersData";
import React from "react";
import SpeakerCard from "./SpeakerCard";
import Image from "next/image";

interface TrackSectionProps {
  name: string;
  img: string;
  speakers: Speaker[];
}

const TrackSection = ({ name, img, speakers }: TrackSectionProps) => {
  return (
    <section className="text-cream">
      <div className="mb-6 flex items-center gap-2 md:mb-10">
        <Image
          src={img}
          alt={`Track name: ${name}`}
          width={113}
          height={72}
          className="h-auto w-24 md:w-28"
        />
        <h2 className="font-clash text-2xl font-semibold lowercase leading-none tracking-[-0.01em] text-cream sm:text-3xl md:text-[2.5rem]">
          {name}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} {...speaker} />
        ))}
      </div>
    </section>
  );
};

export default TrackSection;