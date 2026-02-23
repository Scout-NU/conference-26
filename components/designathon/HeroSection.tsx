import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-16 pt-14 md:px-10 md:pb-24 md:pt-20">
      <div className="max-w-4xl space-y-6">
        <h1 className="font-clash font-medium leading-[0.95] text-[clamp(2.625rem,8vw,6.25rem)]">
          designathon
        </h1>
        <Link
          href="https://entangle-designation.devpost.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-14 items-center gap-2 rounded-full border border-cream/80 px-7 py-3 text-base font-semibold transition-colors hover:border-cream hover:bg-cream/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime md:min-h-16 md:px-9 md:text-lg"
        >
          Register Now
          <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
    </section>
  );
}
