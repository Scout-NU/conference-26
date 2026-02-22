import { scheduleData, Event, TimeSlot } from './scheduleData';
import yellowKnot from './assets/yellow-knot.png';
import blue_blob_header from './assets/blue_blob_header.png';
import blue_blob_center from './assets/blue_blob_center.png';
import impact_pink from './assets/impact_pink.png';
import intention_blue from './assets/intention_blue.png';
import investigation_yellow from './assets/investigation_yellow.png'
import { StaticImageData } from 'next/image';

const knotImages: Record<string, StaticImageData> = {
  'impact_pink': impact_pink,
  'intention_blue': intention_blue,
  'investigation_yellow': investigation_yellow
};

const EventCard = ({ name, speaker, description, location, knots }: Event) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-xl font-semibold text-cream uppercase">{name}</h3>
    {speaker && <p className="text-base font-semibold text-cream">{speaker}</p>}
    <p className="text-sm leading-relaxed text-cream">{description}</p>
    <div className="flex items-center gap-2 mt-1">
      {knots && knots.length > 0 && (
        <div className="flex items-center gap-1">
          {knots.map((knot, i) => (
            <img
              key={i}
              src={knotImages[knot]?.src}
              alt=""
              className="h-20 w-20 object-contain"
            />
          ))}
        </div>
      )}
      <p className="text-sm font-bold text-cream">{location}</p>
    </div>
  </div>
);

const TimeSlotRow = ({ time, events, isLast }: TimeSlot & { isLast: boolean }) => (
  <div className="py-6">
    <div className="flex gap-10">
      {/* Time on the left */}
      <div className="w-28 flex-shrink-0 text-base font-semibold text-cream">{time}</div>

      {/* Events grid on the right - max 2 per row */}
      <div className="flex-1">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {events.map((event, i) => (
            <EventCard key={i} {...event} />
          ))}
        </div>
      </div>
    </div>
    {!isLast && (
      <div className="mt-6 border-t border-zinc-700"></div>
    )}
  </div>
);

export default function Schedule() {
  return (
    <div className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">

      {/* Blue blob — anchored top-right, below yellow knot */}
      <div className="pointer-events-none absolute top-0 right-0 z-0 hidden md:block"
        style={{ width: 'clamp(500px, 55vw, 900px)' }}
      >
        <img
          src={blue_blob_header.src}
          alt=""
          className="w-full h-auto object-contain translate-x-16 -translate-y-8"
        />
      </div>

      {/* Yellow knot — above blue blob, still behind content */}
      <div
        className="pointer-events-none absolute z-10"
        style={{
          width: 'clamp(1100px, 120vw, 1500px)',
          top: 0,
          right: 0,
          transform: 'translate(48%, -25%) rotate(10.17deg)',
        }}
      >
        <img
          src={yellowKnot.src}
          alt=""
          className="h-auto w-full object-contain"
        />
      </div>


      {/* Blue blob 2 — mid page, left side */}
      <div className="pointer-events-none absolute left-0 z-0 hidden md:block"
        style={{ width: 'clamp(600px, 65vw, 950px)', top: '38%', left: '15%' }}
      >
        <img
          src={blue_blob_center.src}
          alt=""
          className="w-full h-auto object-contain -translate-x-10 rotate-255 scale-110"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-8 py-16">
        <h1 className="mb-40 text-6xl font-semibold text-cream">schedule</h1>

        {/* Glass card wrapping all schedule content */}
        <div
          className="relative z-10 rounded-2xl p-8"
          style={{
            background: 'rgba(255, 255, 255, 0.07)',
            backdropFilter: 'blur(0.5px) contrast(1.1) saturate(1.4)',
            WebkitBackdropFilter: 'blur(0.5px) contrast(1.1) saturate(1.4)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {scheduleData.map((slot, index) => (
            <TimeSlotRow
              key={index}
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