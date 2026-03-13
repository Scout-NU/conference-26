import { Criteria } from "./types";
import Image from "next/image";

export default function JudgingCriteriaSection({
  criteria,
}: {
  criteria: Criteria[];
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-20">
      <h2 className="font-clash text-[clamp(2rem,5vw,4rem)] lg:text-[4rem] leading-none">
        judging criteria
      </h2>
      <div className="mt-8 grid gap-x-8 gap-y-7 md:mt-10 md:grid-cols-2 md:gap-y-10">
        {criteria.map((item) => (
          <article key={item.title} className="flex items-start gap-4">
            <div className="relative mt-0.5 h-16 w-16 shrink-0">
              <Image
                src={item.icon}
                alt={`${item.title} icon`}
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-clash text-xl leading-tight md:text-2xl">
                {item.title}
              </h3>
              <p className="font-pp-neue max-w-[40ch] text-sm leading-relaxed text-cream/85 md:text-base">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
