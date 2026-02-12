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

const TrackSection = ({name, trackColor, img, speakers}: TrackSectionProps) => {
  return (
    <section className='mt-32 max-md:mt-16 text-[#fffcec]'>
      <div className='flex gap-5 items-center'>
        <span className={`w-2.25 h-16.25 ${trackColor}`}></span>
        <h2 className="text-3xl sm:text-[40px] font-clash uppercase font-medium text-center md:text-left">{name}</h2>
        <Image 
          src={img}
          alt={`Track name: ${name}`}
          width={80}
          height={56}
        />
      </div>

      <div className="flex flex-col gap-8">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} {...speaker} />
        ))}
      </div>
    </section>
  )
}

export default TrackSection