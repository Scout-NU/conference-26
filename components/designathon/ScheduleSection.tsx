interface ScheduleEvent {
  time: string;
  name: string;
  speaker: string;
  description: string;
  location: string;
}

const scheduleEvents: ScheduleEvent[] = [
  {
    time: "9:00",
    name: "Opening Ceremony",
    speaker: "Design Team",
    description:
      "Welcome to the Designathon! Join us for an introduction to this year's theme, team formation, and an overview of the event schedule and judging criteria.",
    location: "ATRIUM",
  },
  {
    time: "10:00",
    name: "Design Sprint Begins",
    speaker: "All Teams",
    description:
      "Teams receive their prompts and begin the research and ideation phase. Mentors will be available to provide guidance and answer questions.",
    location: "WORKSHOP ROOMS",
  },
  {
    time: "12:00",
    name: "Lunch Break",
    speaker: "All Participants",
    description:
      "Take a break, refuel, and network with other participants and mentors. Food will be provided in the main atrium.",
    location: "ATRIUM",
  },
  {
    time: "1:00",
    name: "Prototyping Phase",
    speaker: "All Teams",
    description:
      "Teams move into prototyping their solutions. Focus on creating tangible representations of your ideas that communicate your design vision.",
    location: "WORKSHOP ROOMS",
  },
  {
    time: "3:00",
    name: "Mentor Check-ins",
    speaker: "Industry Mentors",
    description:
      "Scheduled check-ins with industry mentors to receive feedback on your prototypes and refine your presentation strategy.",
    location: "BREAKOUT ROOMS",
  },
  {
    time: "4:00",
    name: "Final Presentations",
    speaker: "All Teams",
    description:
      "Each team presents their design solution to the panel of judges. Presentations should be 5 minutes with 2 minutes for Q&A.",
    location: "MAIN STAGE",
  },
  {
    time: "5:30",
    name: "Judging & Deliberation",
    speaker: "Judges Panel",
    description:
      "Judges review all submissions and deliberate on winners based on the established criteria: originality, functionality, impact, and presentation.",
    location: "PRIVATE",
  },
  {
    time: "6:00",
    name: "Awards Ceremony",
    speaker: "Event Hosts",
    description:
      "Join us for the announcement of winners, prize distribution, and closing remarks. Celebrate the incredible work of all participants!",
    location: "ATRIUM",
  },
];

export default function ScheduleSection() {
  return (
    <section className="px-6 md:px-8 lg:px-[120px] py-16 lg:py-20 overflow-hidden">
      <div className="flex flex-col gap-10 lg:gap-[53px]">
        {scheduleEvents.map((event, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 md:gap-[73px]"
          >
            {/* Time */}
            <div className="md:w-[194px] flex-shrink-0">
              <p className="font-bold text-2xl md:text-4xl text-cream uppercase tracking-tight">
                {event.time}
              </p>
            </div>

            {/* Event Details */}
            <div className="flex-1 flex flex-col gap-4 md:gap-[23px]">
              <h3 className="font-bold text-2xl md:text-4xl text-cream uppercase tracking-tight">
                {event.name}
              </h3>
              <p className="font-bold text-lg md:text-2xl text-cream uppercase tracking-tight">
                {event.speaker}
              </p>
              <p className="text-cream text-base md:text-lg leading-relaxed">
                {event.description}
              </p>
              <div className="flex items-center gap-2">
                <p className="font-bold text-lg md:text-2xl text-cream tracking-tight">
                  {event.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
