import { scheduleData, Event } from './scheduleData';
import handImage from './handimage.png';

const EventItem = ({ time, name, description, location, isLast }: Event & { isLast: boolean }) => (
  <div className="flex gap-8 py-6">
    {/* Time on the left */}
    <div className="w-24 flex-shrink-0 text-sm font-medium text-zinc-400">{time}</div>
    
    {/* Content on the right */}
    <div className="flex flex-1 flex-col gap-3">
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-sm leading-relaxed text-zinc-400">{description}</p>
      <div className="flex items-center gap-2 text-sm text-zinc-400">
        <svg
          className="h-4 w-4 fill-zinc-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
        <span>{location}</span>
      </div>
      {!isLast && (
        <div className="mt-6 border-t border-zinc-700"></div>
      )}
    </div>
  </div>
);

export default function Schedule() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-900">
      {/* Header */}
      <nav className="flex items-center justify-between border-b border-zinc-800 px-8 py-4">
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

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-8 py-16">
        <h1 className="mb-16 text-6xl font-bold text-white">Schedule</h1>

        {/* Single Large Bubble with Background Image */}
        <div className="relative overflow-hidden rounded-3xl bg-zinc-800/50 p-8 backdrop-blur-sm">
          {/* Background Image - Centered */}
          <div 
            className="absolute inset-0 rounded-3xl"
            style={{
              backgroundImage: `url(${handImage.src})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              opacity: 0.4,
              zIndex: 0
            }}
          ></div>
          
          {/* Events list */}
          <div className="relative z-10">
            {scheduleData.map((event, index) => (
              <EventItem
                key={index}
                time={event.time}
                name={event.name}
                description={event.description}
                location={event.location}
                isLast={index === scheduleData.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}