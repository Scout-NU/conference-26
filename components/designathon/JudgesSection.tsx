import { Judge } from "./types";
import Image from "next/image";

export default function JudgesSection({ judges }: { judges: Judge[] }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-20">
      <h2 className="font-clash font-[550] text-[clamp(2rem,5vw,4rem)] lg:text-[4rem] leading-none">judges</h2>
      <div className="mt-8 grid grid-cols-2 gap-5 md:mt-10 md:grid-cols-4 md:gap-8">
        {judges.map((judge, index) => (
          <article key={`${judge.name}-${index}`} className="space-y-3 text-left">
            <div className="relative aspect-[247/309] w-full overflow-hidden bg-zinc-300">
              {judge.image ? (
                <Image
                  src={judge.image}
                  alt={judge.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              ) : null}
            </div>

            <div>
              <p className="font-pp-neue text-[clamp(1.625rem,3vw,2.5rem)] lg:text-[1.875rem] leading-none">
                {judge.name}
              </p>
              <p className="font-pp-neue mt-1 text-sm font-medium lg:text-[1.5625rem] md:text-sm">
                {judge.title}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
