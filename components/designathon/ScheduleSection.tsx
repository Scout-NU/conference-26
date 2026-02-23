import { DesignathonEvent } from "./types";

function renderTimeLabel(time: string) {
  const parts = time.trim().split(/\s+/);
  if (parts.length < 3) return time;

  const lastPart = parts[parts.length - 1];
  const firstLine = parts.slice(0, -1).join(" ");

  return (
    <>
      <span className="block">{firstLine}</span>
      <span className="block">{lastPart}</span>
    </>
  );
}

function ScheduleEventRow({
  event,
  isLast,
}: {
  event: DesignathonEvent;
  isLast: boolean;
}) {
  return (
    <article className="space-y-5 pb-8 md:grid md:grid-cols-[12rem_1fr] md:gap-10 md:space-y-0 md:pb-10">
      <h3 className="max-w-[18ch] text-lg font-bold uppercase leading-tight tracking-wide text-cream md:text-[1.75rem] lg:text-[1.5rem]">
        {renderTimeLabel(event.time)}
      </h3>

      <div className="space-y-4">
        <p className="text-xl font-bold uppercase leading-tight tracking-wide text-cream md:text-[1.75rem]">
          {event.title}
        </p>
        <p className="max-w-[70ch] text-sm leading-relaxed text-cream/85 md:text-base">
          {event.description}
        </p>
        {event.location ? (
          <p className="inline-flex min-h-11 items-center gap-2 text-base font-bold uppercase text-cream md:text-xl">
            <span
              aria-hidden="true"
              className="inline-block h-2.5 w-2.5 rounded-full bg-magenta"
            />
            {event.location}
          </p>
        ) : null}
      </div>

      {!isLast ? (
        <div className="mt-8 border-t border-cream/20 md:col-span-2 md:mt-10" />
      ) : null}
    </article>
  );
}

export default function ScheduleSection({
  schedule,
}: {
  schedule: DesignathonEvent[];
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 md:px-8 md:py-16">
      <div className="rounded-2xl border border-cream/10 bg-white/[0.06] p-5 shadow-[0_0_0_1px_rgba(255,252,236,0.02),0_8px_22px_rgba(0,0,0,0.25)] backdrop-blur-sm md:p-8">
        <h2 className="sr-only">Designathon Schedule</h2>
        <div className="space-y-0">
          {schedule.map((event, index) => (
            <ScheduleEventRow
              key={`${event.time}-${event.title}`}
              event={event}
              isLast={index === schedule.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
