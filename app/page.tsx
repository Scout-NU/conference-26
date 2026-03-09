import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import TeamSection from "@/components/TeamMembers";
import ScrollFrameAnimationLazy from "@/components/ScrollFrameAnimationLazy";
import type { Member, Team, TeamProps } from "@/components/TeamMembers"
import type { FrameVariant } from "@/components/test";
import Footer from "@/components/designathon/Footer";

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

const MEMBERS: Member[] = [
  { name: "Jasmine Sun", role: "Conference Director", image: "/images/placeholder.png", team: "operations" },
  { name: "Andrew Wallace", role: "Conference Assistant Director", image: "/images/placeholder.png", team: "operations" },
  { name: "Adeline Yu", role: "Conference Assistant Director", image: "/images/placeholder.png", team: "operations" },
  { name: "Nicole Schubert", role: "Operations Coordinator", image: "/images/placeholder.png", team: "operations" },
  { name: "Kendra Ruan", role: "Operations Coordinator", image: "/images/placeholder.png", team: "operations" },
  { name: "Saloni Bhatia", role: "Operations Coordinator", image: "/images/placeholder.png", team: "operations" },
  { name: "Saidah Ly", role: "Design Lead", image: "/images/placeholder.png", team: "design" },
  { name: "Xinning Lucy Liu", role: "Designer + Developer", image: "/images/placeholder.png", team: "design" },
  { name: "Ruby Harkness", role: "Designer", image: "/images/placeholder.png", team: "design" },
  { name: "Jocelyn Hayes", role: "Designer", image: "/images/placeholder.png", team: "design" },
  { name: "Ha Ngyuen", role: "Designer", image: "/images/placeholder.png", team: "design" },
  { name: "Katherine Kim", role: "Experience Design Lead", image: "/images/placeholder.png", team: "experience design" },
  { name: "Autumn Gilmore", role: "Experience Designer", image: "/images/placeholder.png", team: "experience design" },
  { name: "Alexandra Katz", role: "Experience Designer", image: "/images/placeholder.png", team: "experience design" },
  { name: "Lea Lang", role: "Experience Designer", image: "/images/placeholder.png", team: "experience design" },
  { name: "Ah-roh Ko", role: "Marketing Lead", image: "/images/placeholder.png", team: "marketing" },
  { name: "Reagan White", role: "Marketer", image: "/images/placeholder.png", team: "marketing" },
  { name: "Anika Parikh", role: "Marketer", image: "/images/placeholder.png", team: "marketing" },
  { name: "Eva Yuan", role: "Marketer", image: "/images/placeholder.png", team: "marketing" },
  { name: "Bhasuk (Bua) Limpkittisin", role: "Marketer", image: "/images/placeholder.png", team: "marketing" },
  { name: "Medha Gollamudi", role: "Marketer", image: "/images/placeholder.png", team: "marketing" },
  { name: "Sairah Sachdeva", role: "Social Media Coordinator", image: "/images/placeholder.png", team: "marketing" },
  { name: "Zaydaan Jahangir", role: "Tech Lead", image: "/images/placeholder.png", team: "tech" },
  { name: "Afra Ankita", role: "Developer", image: "/images/placeholder.png", team: "tech" },
  { name: "Ivan Lam", role: "Developer", image: "/images/placeholder.png", team: "tech" },
  { name: "Xinning Lucy Liu", role: "Designer + Developer", image: "/images/placeholder.png", team: "tech" },
];

export default function Home({
  searchParams,
}: {
  searchParams?: { frames?: string | string[] };
}) {
  const USE_QUERY_FRAME_VARIANT = false;
  const FRAME_VARIANT_FOR_COMPARISON: FrameVariant = "maxOptimized";

  const selectedFramesParam = Array.isArray(searchParams?.frames)
    ? searchParams?.frames[0]
    : searchParams?.frames;
  const frameVariantFromQuery: FrameVariant =
    selectedFramesParam === "optimized"
      ? "optimized"
      : selectedFramesParam === "max-optimized"
        ? "maxOptimized"
        : "original";
  const frameVariant = USE_QUERY_FRAME_VARIANT
    ? frameVariantFromQuery
    : FRAME_VARIANT_FOR_COMPARISON;

  return (
    <main className="bg-charcoal text-cream">
      <section className="px-6 pt-6">
        <div className="mx-auto flex max-w-6xl items-center gap-4 text-sm font-pp-neue text-cream/80">
          <span>Frame set (code toggle):</span>
          <span className="rounded border border-lime bg-lime px-3 py-1 font-semibold text-charcoal">
            {frameVariant}
          </span>
        </div>
      </section>
      {/* Hero Section */}
      <ScrollFrameAnimationLazy variant={frameVariant} />


      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl">

          {/* Content */}
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-[2rem] font-medium tracking-tight lg:text-[7rem]">
              to design is to entangle
            </h1>
            <div className="flex flex-row gap-16 justify-center">
              {/* Image placeholder */}
              <div className="w-5/3 border-lime border bg-zinc-300">
                <Image
                  src="/images/conference-home-1.webp"
                  alt="Conference overview"
                  width={1590}
                  height={1000}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover w-full aspect-159/100"
                />
              </div>
              {/* Text */}
              <div className="text-lg font-pp-neue leading-relaxed">
                <p className="mb-8">
                  This year, under the theme <span className='font-bold text-lime'>Entangle</span>,
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
          <h1 className="mb-16 text-[2rem] font-medium tracking-tight lg:text-[7rem]">
            tracks
          </h1>
          <div className="flex flex-col">
            {/* Track 1 */}
            <div className="flex flex-row gap-16 items-center">
              <Image
                src="/images/track1.webp"
                alt="Intention track visual"
                width={2040}
                height={950}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover w-140 aspect-204/95"
              />
              <div className="flex flex-col items-left w-fill">
                <h3 className="mb-4 text-md font-medium lg:text-[2rem]">
                  Intention
                </h3>
                <p className="text-left text-lg font-pp-neue leading-relaxed">
                  What are the values, assumptions, and politics that underpin design intention?
                </p>
              </div>
            </div>
            {/* Track 2 */}
            <div className="flex flex-row gap-16 items-center">
              <div className="flex flex-col items-left w-fill">
                <h3 className="mb-4 text-[7rem] font-medium lg:text-[2rem]">
                  Investigation
                </h3>
                <p className="text-left text-lg font-pp-neue leading-relaxed">
                  What role does design play in re-entangling technology with ecology, culture, and society?
                </p>
              </div>
              <Image
                src="/images/track2.webp"
                alt="Investigation track visual"
                width={630}
                height={620}
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover w-120 aspect-63/62"
              />
            </div>
            {/* Track 3 */}
            <div className="flex flex-row gap-16 items-center">
              <Image
                src="/images/track3.webp"
                alt="Impact track visual"
                width={1840}
                height={910}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover w-140 aspect-184/91"
              />
              <div className="flex flex-col items-left w-fill">
                <h3 className="mb-4 text-md font-medium lg:text-[2rem]">
                  Impact
                </h3>
                <p className="text-left text-lg font-pp-neue leading-relaxed">
                  How might we record, evaluate, and re-evaluate the social life of technologies and their afterlives?
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
            <h1 className="text-[2rem] font-medium tracking-tight lg:text-[7rem]">
              about interventions
            </h1>
            <div className="flex flex-col gap-16 justify-center">

              {/* Text */}
              <p className="text-lg font-pp-neue leading-relaxed">
              Welcome to Entangle, the ninth Interventions event, a one-day design conference hosted annually by Scout. 
              Entangle is more than just a conference, it&apos;s a movement. It&apos;s about pushing boundaries, changing the way we 
              think, and designing for a future where technology is rapidly changing. Instead of rushing forward, we&apos;re asking:
               how do designers/creative individuals pause, reflect, and understand the complex systems they&apos;re part of before
                building the future?
              </p>
              {/* Images */}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end items-start my-40 ">
          <div className="inline-block border border-lime shrink-0">
            <Image
              src="/images/home-interventions-1.webp"
              alt="Interventions collage image one"
              width={1590}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="w-160 object-cover aspect-159/100"
            />
          </div>
          <div className="inline-block border border-lime -m-24 shrink-0">
            <Image
              src="/images/home-interventions-2.webp"
              alt="Interventions collage image two"
              width={1590}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 25vw"
              className="w-120 object-cover aspect-159/100"
            />
          </div>
          <div className="inline-block border border-lime my-16 shrink-0">
            <Image
              src="/images/home-interventions-3.webp"
              alt="Interventions collage image three"
              width={1590}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 24vw"
              className="w-110 object-cover aspect-159/100"
            />
          </div>
        </div>
      </section>

      {/* About Scout */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-6xl">

          {/* Content */}
          <div className="flex flex-col gap-5 justify-center">
            <h1 className="text-[2rem] font-medium tracking-tight lg:text-[7rem]">
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
                  className="bg-lime text-charcoal text-[2rem] px-8 py-4 hover:bg-sky rounded-xl">
                  Scout Website
                </Link>
              </div>
              {/* Image placeholder */}
              <Image
                className="w-105 h-auto"
                src="/brand/limelogo.png"
                alt="Scout logo mark"
                width={971}
                height={971}
                sizes="(max-width: 1024px) 70vw, 35vw"
              />

            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-24 mb-48 lg:py-24">
        <TeamSection members={MEMBERS}></TeamSection>
      </section>

      <Footer />

    </main>
  );
}
