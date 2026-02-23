import { Judge } from "./types";

export default function JudgesSection({ judges }: { judges: Judge[] }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-20">
      <h2 className="font-clash text-[clamp(2rem,5vw,4rem)] leading-none">Judges</h2>
      <div className="mt-8 grid grid-cols-2 gap-5 md:mt-10 md:grid-cols-4 md:gap-8">
        {judges.map((judge, index) => (
          <article key={`${judge.name}-${index}`} className="space-y-3 text-center">
            <div className="aspect-[247/309] w-full bg-zinc-300" />
            <div>
              <p className="font-clash text-[clamp(1.625rem,3vw,2.5rem)] leading-none">
                {judge.name}
              </p>
              <p className="mt-1 text-sm font-bold md:text-base">{judge.title}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
