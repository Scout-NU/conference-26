import Image from "next/image";
import { Prize } from "./types";

export default function PrizesSection({ prizes }: { prizes: Prize[] }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-20">
      <h2 className="font-clash text-[clamp(2rem,5vw,4rem)] lg:text-[4rem] leading-none">prizes</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-10">
        {prizes.map((item, index) => (
          <article key={`${item.title}-${index}`} className="space-y-3">
            <div
              className={`relative aspect-[345/328] w-full ${item.whiteBackground ? "bg-white" : ""
                }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-contain"
              />
            </div>
            <p className="text-center text-xl font-bold uppercase md:text-2xl">
              {item.title}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
