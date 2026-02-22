export default function PrizesSection({ prizes }: { prizes: string[] }) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10 md:py-20">
      <h2 className="font-clash text-[clamp(2rem,5vw,4rem)] leading-none">Prizes</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 md:mt-10">
        {prizes.map((item, index) => (
          <article key={`${item}-${index}`} className="space-y-3">
            <div className="aspect-[345/328] w-full bg-zinc-300" />
            <p className="text-center text-xl font-bold uppercase md:text-2xl">
              {item}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
