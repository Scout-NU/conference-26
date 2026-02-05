// import { scheduleData, Event } from './scheduleData';

// Temporary schedule data while scheduleData.ts is being created
interface Event {
  time: string;
  name: string;
  description: string;
  location: string;
}

const scheduleData: Event[] = [];
// import handImage from './handimage.png';

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

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-8 py-16">
        <h1 className="mb-16 text-6xl font-bold text-white">Schedule</h1>

        {/* Container with full-width background */}
        <div className="relative">
          {/* Background Image - Full Width */}
          <div 
            className="absolute left-1/2 top-0 h-full w-screen -translate-x-1/2"
            style={{
              // backgroundImage: `url(${handImage.src})`,
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
              {scheduleData.map((event: Event, index: number) => (
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
    </div>
  );
}