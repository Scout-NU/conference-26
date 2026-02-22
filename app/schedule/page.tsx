import Image, { StaticImageData } from 'next/image';
import { scheduleData, Event, TimeSlot, Knot } from './scheduleData';
import yellowKnot from './assets/yellow-knot.png';
import blue_blob_header from './assets/blue_blob_header.png';
import blue_blob_center from './assets/blue_blob_center.png';
import impact_pink from './assets/impact_pink.png';
import intention_blue from './assets/intention_blue.png';
import investigation_yellow from './assets/investigation_yellow.png';

const knotImages: Record<Knot, StaticImageData> = {
  impact_pink,
  intention_blue,
  investigation_yellow,
};

const EventCard = ({ name, speaker, description, location, knots }: Event) => (
  <article className="flex flex-col gap-3">
    <h3 className="text-xl font-semibold uppercase leading-tight tracking-[-0.02em] text-cream sm:text-2xl lg:text-[2rem]">
      {name}
    </h3>
    {speaker && (
      <p className="text-base font-bold uppercase leading-tight tracking-[-0.02em] text-cream sm:text-lg lg:text-[1.375rem]">
        {speaker}
      </p>
    )}
    <p className="text-sm leading-relaxed tracking-[-0.01em] text-cream sm:text-base lg:text-[1.0625rem]">
      {description}
    </p>
    <div className="mt-1 flex flex-wrap items-center gap-2">
      {knots && knots.length > 0 && (
        <div className="flex items-center gap-1">
          {knots.map((knot, index) => (
            <Image
              key={`${name}-${knot}-${index}`}
              src={knotImages[knot]}
              alt=""
              aria-hidden="true"
              width={64}
              height={64}
              sizes="(min-width: 640px) 4rem, 3rem"
              className="h-12 w-12 object-contain sm:h-16 sm:w-16"
            />
          ))}
        </div>
      )}
      <p className="whitespace-nowrap text-sm font-bold uppercase tracking-[-0.02em] text-cream sm:text-base lg:text-[1.25rem]">
        {location}
      </p>
    </div>
  </article>
);

const TimeSlotRow = ({ time, events, isLast }: TimeSlot & { isLast: boolean }) => (
  <div className="py-5 sm:py-6">
    <div className="flex flex-col gap-3 sm:flex-row sm:gap-8 lg:gap-10">
      <div className="shrink-0 whitespace-nowrap text-lg font-bold uppercase leading-tight tracking-[-0.02em] text-cream sm:w-32 sm:text-xl lg:text-[1.625rem]">
        {time}
      </div>

      <div className="flex-1">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {events.map((event) => (
            <EventCard key={`${time}-${event.name}`} {...event} />
          ))}
        </div>
      </div>
    </div>
    {!isLast && <div className="mt-6 border-t border-zinc-700" />}
  </div>
);

export default function Schedule() {
  return (
    <div
      className="relative min-h-dvh overflow-hidden"
      style={{ background: "var(--Grey, #272727)" }}
    >
      <div className="pointer-events-none absolute right-0 top-0 z-0 hidden w-[clamp(31.25rem,55vw,56.25rem)] md:block">
        <Image
          src={blue_blob_header}
          alt=""
          aria-hidden="true"
          priority
          sizes="(min-width: 768px) 55vw, 0px"
          className="h-auto w-full translate-x-16 -translate-y-8 object-contain"
        />
      </div>

      <div
        className="pointer-events-none absolute right-0 top-0 z-10 hidden w-[clamp(75rem,130vw,106.25rem)] translate-x-[48%] -translate-y-[25%] rotate-[10.17deg] md:block"
      >
        <Image
          src={yellowKnot}
          alt=""
          aria-hidden="true"
          priority
          sizes="(min-width: 768px) 120vw, 0px"
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="pointer-events-none absolute left-[23%] top-[37%] z-0 hidden w-[clamp(37.5rem,65vw,59.375rem)] -rotate-[108.93deg] md:block">
        <Image
          src={blue_blob_center}
          alt=""
          aria-hidden="true"
          sizes="(min-width: 768px) 65vw, 0px"
          className="h-auto w-full scale-110 object-contain"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <h1 className="mb-16 text-4xl font-semibold leading-none tracking-[-0.01em] text-cream sm:mb-24 sm:text-5xl lg:mb-50 lg:text-[5.5rem]">
          schedule
        </h1>

        <div
          className="relative z-10 rounded-2xl border border-white/10 bg-white/10 p-4 supports-[backdrop-filter]:bg-white/5 supports-[backdrop-filter]:backdrop-blur-[1px] supports-[backdrop-filter]:backdrop-saturate-150 sm:p-8"
        >
          {scheduleData.map((slot, index) => (
            <TimeSlotRow
              key={slot.time}
              time={slot.time}
              events={slot.events}
              isLast={index === scheduleData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}