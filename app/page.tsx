import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollFrameAnimation from "@/components/test";

// Placeholder star icon component
function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

// Placeholder avatar icon component
function AvatarPlaceholder() {
  return (
    <div className="flex aspect-square w-full items-center justify-center bg-zinc-300">
      <svg
        className="size-2/3 text-zinc-400"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M12 14c-6 0-8 3-8 6v2h16v-2c0-3-2-6-8-6z" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-charcoal text-cream">
      {/* Hero Section */}
      <ScrollFrameAnimation />


      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl">

          {/* Content */}
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-xl font-medium tracking-tight lg:text-2xl">
              about entangle
            </h1>
            <div className="flex flex-row gap-16 justify-center">
              {/* Image placeholder */}
              <div className="w-5/3 border-lime border bg-zinc-300" />
              {/* Text */}
              <div className="text-lg font-pp-neue leading-relaxed">
                <p className="mb-8">
                  To design is to entangle. This year, under the theme <span className='font-bold text-lime'>Entangle</span>,
                  we invite participants to trace the threads that weave humans, technologies, and environments into complex,
                  evolving relations across scales – from quantum particles to planetary systems, and from intimate gestures to
                  techno-political infrastructures.
                </p>
                <p>
                  Join us on <span className='font-bold text-lime'>Sunday, March 22nd</span> for a full day of inspiration,
                  experimentation and collaboration, featuring keynote talks, panel discussions, and interactive workshops!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl">
          <h1 className="mb-16 text-xl font-medium tracking-tight lg:text-2xl">
            tracks
          </h1>
          <div className="flex flex-col">
            {/* Track 1 */}
            <div className="flex flex-row gap-16 items-center">
              <img src="images/track1.png" className="object-cover w-140 aspect-204/95"></img>
              <div className="flex flex-col items-left w-fill">
                <h3 className="mb-4 text-md font-medium lg:text-xl">
                  Intention
                </h3>
                <p className="text-left text-lg font-pp-neue leading-relaxed">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
                </p>
              </div>
            </div>
            {/* Track 2 */}
            <div className="flex flex-row gap-16 items-center">
              <div className="flex flex-col items-left w-fill">
                <h3 className="mb-4 text-2xl font-medium lg:text-xl">
                  Investigation
                </h3>
                <p className="text-left text-lg font-pp-neue leading-relaxed">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
                </p>
              </div>
              <img src="images/track2.png" className="object-cover w-120 aspect-63/62"></img>
            </div>
            {/* Track 3 */}
            <div className="flex flex-row gap-16 items-center">
              <img src="images/track3.png" className="object-cover w-140 aspect-184/91"></img>
              <div className="flex flex-col items-left w-fill">
                <h3 className="mb-4 text-md font-medium lg:text-xl">
                  Impact
                </h3>
                <p className="text-left text-lg font-pp-neue leading-relaxed">
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Interventions Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl">

          {/* Content */}
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-xl font-medium tracking-tight lg:text-2xl">
              about interventions
            </h1>
            <div className="flex flex-col gap-16 justify-center">

              {/* Text */}
              <p className="text-lg font-pp-neue leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
              {/* Images */}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end items-start my-40 ">
          <div className="inline-block border border-lime shrink-0">
            <img src="/images/placeholder.png" className="w-160 object-cover aspect-159/100" />
          </div>
          <div className="inline-block border border-lime -m-24 shrink-0">
            <img src="/images/placeholder.png" className="w-120 object-cover aspect-159/100" />
          </div>
          <div className="inline-block border border-lime my-16 shrink-0">
            <img src="/images/placeholder.png" className="w-110 object-cover aspect-159/100" />
          </div>
        </div>
      </section>

      {/* About Scout */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl">

          {/* Content */}
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-xl font-medium tracking-tight lg:text-2xl">
              about scout
            </h1>
            <div className="flex flex-row gap-16 justify-center">

              {/* Text */}
              <div className="text-lg font-pp-neue leading-relaxed">
                <p className="mb-16">
                  We're Scout, Northeastern's student-driven design organization, and we're honored to be your hosts
                  this March 22nd! Our 100+ students work with real clients, offering creative solutions each semester.
                  Beyond client work, we enrich the Northeastern design community through events, Scout Labs collaborations
                  with local organizations, and Scout Media's focus on animation, photography, and video. And of course,
                  we're behind Interventions, our annual design conference that brings together Boston's creative professionals.
                </p>
                <Link href="https://scout.camd.northeastern.edu/"
                  className="bg-lime text-charcoal text-xl px-8 py-4 hover:bg-sky">
                  Scout Website
                </Link>
              </div>
              {/* Image placeholder */}
              <div className="w-5/3 border-lime border bg-zinc-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Previous Conferences Section */}
      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-medium tracking-tight text-black">
            Previous Conferences
          </h2>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[345/367] w-full rounded-[19px] bg-zinc-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="bg-zinc-100 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="overflow-hidden opacity-30">
                <AvatarPlaceholder />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
