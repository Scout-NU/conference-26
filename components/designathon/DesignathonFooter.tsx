import Image from "next/image";

export default function DesignathonFooter() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none h-10 w-full bg-[radial-gradient(95%_180%_at_30%_50%,rgba(61,70,255,0.95),rgba(61,70,255,0)_75%)] md:h-14"
      />

      <footer className="bg-indigo">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-8 md:grid-cols-[1.2fr_0.9fr_0.7fr] md:px-10 md:py-12">
          <div>
            <p className="text-2xl text-cream/95 md:text-4xl">interventions:</p>
            <p className="font-clash text-5xl leading-none md:text-6xl">&amp;entangle</p>
          </div>
          <div className="space-y-1 text-sm leading-relaxed text-cream md:text-base">
            <p>March 22nd, 2026</p>
            <p>8:30 am - 5:00 pm</p>
            <p className="pt-1">
              Northeastern University Interdisciplinary Science &amp; Engineering
              Complex
            </p>
            <p>805 Columbus Ave Boston, MA 02118 United States</p>
          </div>
          <div className="space-y-4">
            <p className="font-clash text-xl md:text-2xl">Connect with us!</p>
            <Image
              src="/assets/tickets-vector.svg"
              alt="Scout social links"
              width={151}
              height={48}
              className="h-auto w-[9.4375rem]"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
