import { scheduleData, Event, TimeSlot } from './scheduleData';
import yellowKnot from './assets/yellow-knot.png';
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
      <div className="w-24 flex-shrink-0 text-sm font-medium text-zinc-400">{time}</div>

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
    <div className="relative min-h-screen overflow-x-clip bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      {/* Header */}
      <nav className="relative z-30 flex items-center justify-between border-b border-zinc-800 px-8 py-4">
        <div className="font-semibold text-white">Conference 2026</div>
        <div className="flex items-center gap-8">
          <a
            href="#schedule"
            className="border-b-2 border-white pb-1 font-medium text-white"
          >
            SCHEDULE
          </a>
          <a
            href="#speakers"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            SPEAKERS
          </a>
          <a
            href="#about"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            ABOUT
          </a>
          <button className="rounded-md bg-blue-300 px-6 py-2 font-semibold text-black transition-colors hover:bg-blue-400">
            TICKETS
          </button>
        </div>
      </nav>

      {/* Yellow knot graphic - fixed to right side of viewport */}
      <div
        className="pointer-events-none fixed z-10"
        style={{
          width: '150vw',
          top: '-18vw',
          right: '-72vw',
          transform: 'rotate(10deg)',
        }}
      >
        <img
          src={yellowKnot.src}
          alt=""
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto max-w-4xl px-8 py-16">
        <h1 className="mb-16 text-6xl font-bold text-white">Schedule</h1>

        {/* Container with full-width background */}
        <div className="relative">
          {/* Background Image - Full Width */}
          <div
            className="absolute left-1/2 top-0 h-full w-screen -translate-x-1/2"
            style={{
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.5,
              zIndex: 0
            }}
          ></div>

          {/* Left gradient blend */}
          <div
            className="absolute left-0 top-0 h-full w-screen"
            style={{
              background: 'linear-gradient(to right, rgba(24, 24, 27, 1) 0%, rgba(24, 24, 27, 0) 15%, rgba(24, 24, 27, 0) 85%, rgba(24, 24, 27, 1) 100%)',
              zIndex: 1,
              pointerEvents: 'none'
            }}
          ></div>

          {/* Card with content */}
          <div className="relative z-10 overflow-hidden rounded-3xl bg-zinc-800/50 p-8 backdrop-blur-sm">
            {/* Events list */}
            <div className="relative">
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
      </div>
    </div>
  );
}