import { scheduleData, Event, TimeSlot } from './scheduleData';
import yellowKnot from './assets/yellow-knot.png';
import blue_blob_header from './assets/blue_blob_header.png';
import knot1 from './assets/knot-1.png';
import knot2 from './assets/knot-2.png';
import knot3 from './assets/knot-3.png';

const knotImages: Record<string, typeof knot1> = {
  'knot-1': knot1,
  'knot-2': knot2,
  'knot-3': knot3,
};

const EventCard = ({ name, speaker, description, location, knots }: Event) => (
  <div className="flex flex-col gap-3">
    <h3 className="text-xl font-semibold text-white">{name}</h3>
    {speaker && <p className="text-sm font-semibold text-zinc-300">{speaker}</p>}
    <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
    <div className="flex items-center gap-2 text-sm text-zinc-400">
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
      <span>{location}</span>
    </div>
  </div>
);

const TimeSlotRow = ({ time, events, isLast }: TimeSlot & { isLast: boolean }) => (
  <div className="py-6">
    <div className="flex gap-8">
      {/* Time on the left */}
      <div className="w-24 flex-shrink-0 text-sm font-medium text-cream">{time}</div>

      {/* Events grid on the right - max 2 per row */}
      <div className="flex-1">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-8 py-16">
        <h1 className="mb-40 text-6xl font-bold text-cream">schedule</h1>

        {/* Glass card wrapping all schedule content */}
        <div
          className="relative z-10 rounded-2xl p-8"
          style={{
            background: 'rgba(30, 30, 30, 0.25)',
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