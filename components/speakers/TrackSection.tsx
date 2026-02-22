import { Speaker } from '@/constants';
import React from 'react'
import SpeakerCard from './SpeakerCard';
import Image from 'next/image';

interface TrackSectionProps {
  name: string;
  trackColor: string;
  img: string;
  speakers: Speaker[];
}

const TrackSection = ({ name, trackColor, img, speakers }: TrackSectionProps) => {
  return (
    <section className='mt-32 max-md:mt-16 text-[#fffcec]'>
      <div className='flex gap-2 items-center mb-8'>
        <Image
          src={img}
          alt={`Track name: ${name}`}
          width={80}
          height={56}
        />
        <h2 className="text-3xl sm:text-[24px] lowercase font-clash font-medium text-center md:text-left">{name}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} {...speaker} />
        ))}
      </div>
    </section>
  )
}

export default TrackSection