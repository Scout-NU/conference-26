import { scheduleData, Event, TimeSlot } from './scheduleData';

const knotStyles: Record<string, string> = {
  impact_pink: "bg-[#ff66d8]",
  intention_blue: "bg-[#80b8ff]",
  investigation_yellow: "bg-[#ffe57d]",
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
            <span
              key={i}
              aria-hidden="true"
              className={`h-3 w-3 rounded-full ${knotStyles[knot] ?? "bg-cream/70"}`}
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-8rem] top-[-10rem] z-0 h-[28rem] w-[40rem] rounded-full bg-[radial-gradient(70%_60%_at_50%_50%,rgba(130,186,255,0.35),rgba(130,186,255,0)_72%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-24rem] top-[-22rem] z-0 h-[58rem] w-[58rem] rotate-[12deg] rounded-full border-[2.5rem] border-[#ffe57d]/55"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[36%] z-0 hidden h-[34rem] w-[44rem] rounded-full bg-[radial-gradient(62%_58%_at_50%_50%,rgba(130,186,255,0.25),rgba(130,186,255,0)_72%)] md:block"
      />

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