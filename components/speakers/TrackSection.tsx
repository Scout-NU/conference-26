import { Speaker } from '@/constants';
import React from 'react'
import SpeakerCard from './SpeakerCard';

interface TrackSectionProps {
  name: string;
  speakers: Speaker[];
}

const TrackSection = ({name, speakers}: TrackSectionProps) => {
  return (
    <section className='mt-32 text-[#fffcec]'>
      <h2 className="text-3xl sm:text-5xl font-bold mb-6 text-center md:text-left">{name}</h2>

      <div className="flex flex-col gap-16">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} {...speaker} />
        ))}
      </div>
    </section>
  )
}

export default TrackSection