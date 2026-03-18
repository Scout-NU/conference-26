import Link from "next/link";
import Image from "next/image";
import TeamSection from "@/components/TeamMembers";
import ScrollFrameAnimationLazy from "@/components/ScrollFrameAnimationLazy";
import type { Member } from "@/components/TeamMembers"
import type { FrameVariant } from "@/components/test";
import Footer from "@/components/designathon/Footer";

const MEMBERS: Member[] = [
  { name: "jasmine sun", role: "Conference Director", image: "/images/Conference%20Headshots/Jasmine.webp", team: "operations" },
  { name: "andrew wallace", role: "Conference Assistant Director", image: "/images/Conference%20Headshots/Andrew.webp", team: "operations" },
  { name: "adeline yu", role: "Conference Assistant Director", image: "/images/Conference%20Headshots/Adeline%20Yu%20Conference%20Headshot.webp", team: "operations" },
  { name: "nicole schubert", role: "Operations Coordinator", image: "/images/Conference%20Headshots/Nicole.png", team: "operations" },
  { name: "kendra ruan", role: "Operations Coordinator", image: "/images/Conference%20Headshots/Kendra.webp", team: "operations" },
  { name: "saloni bhatia", role: "Operations Coordinator", image: "/images/Conference%20Headshots/Saloni.webp", team: "operations" },
  { name: "saidah ly", role: "Design Lead", image: "/images/Conference%20Headshots/Saidah%20Ly.webp", team: "design" },
  { name: "xinning lucy liu", role: "Designer + Developer", image: "/images/Conference%20Headshots/Xinning%20Liu.webp", team: "design" },
  { name: "ruby harkness", role: "Designer", image: "/images/Conference%20Headshots/Ruby%20Harkness.webp", team: "design" },
  { name: "jocelyn hayes", role: "Designer", image: "/images/Conference%20Headshots/Jocelyn.webp", team: "design" },
  { name: "ha ngyuen", role: "Designer", image: "/images/Conference%20Headshots/Ha%20Nguyen.webp", team: "design" },
  { name: "katherine kim", role: "Experience Design Lead", image: "/images/Conference%20Headshots/Katie.webp", team: "experience design" },
  { name: "autumn gilmore", role: "Experience Designer", image: "/images/Conference%20Headshots/Autumn.webp", team: "experience design" },
  { name: "alexandra katz", role: "Experience Designer", image: "/images/Conference%20Headshots/Alex.webp", team: "experience design" },
  { name: "lea lang", role: "Experience Designer", image: "/images/placeholder.webp", team: "experience design" },
  { name: "ah-roh ko", role: "Marketing Lead", image: "/images/Conference%20Headshots/Ah-roh.webp", team: "marketing" },
  { name: "reagan white", role: "Marketer", image: "/images/Conference%20Headshots/Reagan.webp", team: "marketing" },
  { name: "Anika Parikh", role: "Marketer", image: "/images/Conference%20Headshots/Anika.webp", team: "marketing" },
  { name: "eva yuan", role: "Marketer", image: "/images/Conference%20Headshots/Eva.webp", team: "marketing" },
  { name: "bhasuk (bua) limpkittisin", role: "Marketer", image: "/images/Conference%20Headshots/Bua.webp", team: "marketing" },
  { name: "medha gollamudi", role: "Marketer", image: "/images/Conference%20Headshots/Medha.webp", team: "marketing" },
  { name: "sairah sachdeva", role: "Social Media Coordinator", image: "/images/Conference%20Headshots/Sairah.webp", team: "marketing" },
  { name: "Zaydaan Jahangir", role: "Tech Lead", image: "/images/Conference%20Headshots/Zaydaan.webp", team: "tech" },
  { name: "afra ankita", role: "Developer", image: "/images/Conference%20Headshots/Afra.webp", team: "tech" },
  { name: "ivan lam", role: "Developer", image: "/images/placeholder.webp", team: "tech" },
  { name: "xinning lucy liu", role: "Designer + Developer", image: "/images/Conference%20Headshots/Xinning%20Liu.webp", team: "tech" },
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
    <main className="overflow-hidden bg-charcoal text-cream">
      {/* Hero Section (desktop only) */}
      <div className="hidden md:block">
        <ScrollFrameAnimationLazy variant={frameVariant} />
      </div>


      {/* About Section */}
      <section className="relative py-24">
        <Image
          className="absolute top-[50vh] right-[14vw] w-[95vw] rotate-5"
          src="/images/bluerope.webp"
          alt=""
          width={1920}
          height={360}
          sizes="95vw"
          aria-hidden="true"
        />
        <Image
          className="absolute top-[70vh] left-200 w-[45vw]"
          src="/images/doubleloop.svg"
          alt=""
          width={674}
          height={537}
          sizes="25vw"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl px-6 lg:px-0">

          {/* Content */}
          <div className="flex flex-col justify-center gap-6 lg:gap-5">
            <h1 className="max-w-[18ch] text-[clamp(2rem,8vw,2.5rem)] font-medium tracking-tight lg:max-w-none lg:text-[4rem]">
              to design is to entangle
            </h1>
            <div className="flex flex-col gap-6 lg:flex-row lg:justify-center lg:gap-16">
              {/* Image placeholder */}
              <div className="w-full border border-lime bg-zinc-300 lg:w-5/3">
                <Image
                  src="/images/conference-home-1.webp"
                  alt="Conference overview"
                  width={1590}
                  height={1000}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="aspect-159/100 w-full object-cover"
                />
              </div>
              {/* Text */}
              <div className="text-base font-pp-neue leading-relaxed lg:text-lg">
                <p className="mb-6 lg:mb-8">
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
      <section className="relative py-16 lg:mt-48 lg:py-24">
        <Image
          className="absolute top-[135vh] aspect-auto w-screen rotate-2"
          src="/images/bluerope2.webp"
          alt=""
          width={1920}
          height={420}
          sizes="100vw"
          aria-hidden="true"
        />
        <Image
          className="absolute top-[135vh] w-screen rotate-2"
          src="/images/squiggleoutline2.svg"
          alt=""
          width={1440}
          height={554}
          sizes="100vw"
          aria-hidden="true"
        />
        <Image
          className="absolute top-[210vh] aspect-auto w-screen"
          src="/images/bluerope3.webp"
          alt=""
          width={1920}
          height={420}
          sizes="100vw"
          aria-hidden="true"
        />
        <Image
          className="absolute top-[277vh] w-screen"
          src="/images/squiggleoutline.svg"
          alt=""
          width={1440}
          height={363}
          sizes="100vw"
          aria-hidden="true"
        />
        <Image
          className="absolute top-[400vh] w-screen z-10"
          src="/images/squiggleoutline3.svg"
          alt=""
          width={1440}
          height={363}
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="mx-auto grid max-w-6xl px-6 lg:px-0">
          <h1 className="mb-10 text-center text-[clamp(2rem,8vw,2.5rem)] font-medium tracking-tight lg:mb-16 lg:text-left lg:text-[4rem]">
            tracks
          </h1>
          <div className="flex flex-col gap-10 lg:gap-0">
            {/* Track 1 */}
            <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-center lg:gap-16 lg:text-left">
              <Image
                src="/images/track1.webp"
                alt="Intention track visual"
                width={2040}
                height={950}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-204/95 w-full max-w-[22rem] object-cover lg:w-140 lg:max-w-none"
              />
              <div className="flex w-full flex-col items-center lg:w-auto lg:items-start">
                <h3 className="font-clash mb-3 text-2xl font-[550] lg:mb-4 lg:text-[2rem]">
                  intention
                </h3>
                <p className="max-w-[32ch] text-center text-base font-pp-neue leading-relaxed lg:max-w-none lg:text-left lg:text-lg">
                  What are the values, assumptions, and politics that underpin design intention?
                </p>
              </div>
            </div>
            {/* Track 2 */}
            <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-center lg:gap-16 lg:text-left">
              <div className="order-2 flex w-full flex-col items-center lg:order-1 lg:w-auto lg:items-start">
                <h3 className="font-clash mb-3 text-2xl font-[550] lg:mb-4 lg:text-[2rem]">
                  investigation
                </h3>
                <p className="max-w-[32ch] text-center text-base font-pp-neue leading-relaxed lg:max-w-none lg:text-left lg:text-lg">
                  What role does design play in re-entangling technology with ecology, culture, and society?
                </p>
              </div>
              <Image
                src="/images/track2.webp"
                alt="Investigation track visual"
                width={630}
                height={620}
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="order-1 aspect-63/62 w-full max-w-[13rem] object-cover lg:order-2 lg:w-120 lg:max-w-none"
              />
            </div>
            {/* Track 3 */}
            <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-center lg:gap-16 lg:text-left">
              <Image
                src="/images/track3.webp"
                alt="Impact track visual"
                width={1840}
                height={910}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-184/91 w-full max-w-[22rem] object-cover lg:w-140 lg:max-w-none"
              />
              <div className="flex w-full flex-col items-center lg:w-auto lg:items-start">
                <h3 className="font-clash mb-3 text-2xl font-[550] lg:mb-4 lg:text-[2rem]">
                  impact
                </h3>
                <p className="max-w-[32ch] text-center text-base font-pp-neue leading-relaxed lg:max-w-none lg:text-left lg:text-lg">
                  How might we record, evaluate, and re-evaluate the social life of technologies and their afterlives?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Interventions Section */}
      <section className="py-12 lg:mt-80 lg:py-24">
        <div className="mx-auto grid max-w-6xl px-6 lg:px-0">

          {/* Content */}
          <div className="flex flex-col justify-center gap-5">
            <h1 className="text-[clamp(2rem,8vw,2.5rem)] lg:text-[4rem] font-medium tracking-tig">
              what is interventions?
            </h1>
            <div className="flex flex-col justify-center gap-6 lg:gap-16">

              {/* Text */}
              <p className="max-w-[36ch] text-base font-pp-neue leading-relaxed lg:max-w-none lg:text-lg">
                Welcome to <span className="text-lime">entangle</span>, the ninth Interventions event, a one-day design conference hosted annually by Scout.
                Entangle is more than just a conference, it&apos;s a movement. <br /> <br />

                It&apos;s about pushing boundaries, changing the way we 
              think, and designing for a future where technology is rapidly changing. Instead of rushing forward, we&apos;re asking:
               how do designers/creative individuals pause, reflect, and understand the complex systems they&apos;re part of before
                building the future?
              </p>
              {/* Images */}
            </div>
          </div>
        </div>
        <div className="my-40 hidden flex-row items-start justify-end lg:flex">
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
      <section className="py-12 lg:py-24">
        <div className="mx-auto grid max-w-6xl px-6 lg:px-0">

          {/* Content */}
          <div className="flex flex-col justify-center gap-5">
            <h1 className="text-[clamp(2rem,8vw,2.5rem)] font-medium tracking-tight lg:text-[4git rem]">
              about scout
            </h1>
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-center lg:gap-16">

              {/* Text */}
              <div className="text-base font-pp-neue leading-relaxed lg:text-lg">
                <p className="mb-8 lg:mb-16">
                  We&apos;re Scout, Northeastern&apos;s student-driven design organization, and we&apos;re honored to be your hosts
                  this March 22nd! Our 100+ students work with real clients, offering creative solutions each semester.
                  Beyond client work, we enrich the Northeastern design community through events, Scout Labs collaborations
                  with local organizations, and Scout Media&apos;s focus on animation, photography, and video. And of course,
                  we&apos;re behind Interventions, our annual design conference that brings together Boston&apos;s creative professionals.
                </p>
                <Link href="https://scout.camd.northeastern.edu/"
                  className="font-pp-neue inline-block rounded-xl bg-lime px-6 py-3 text-xl text-charcoal hover:bg-sky lg:px-8 lg:py-4 lg:text-[2rem]">
                  Scout Website
                </Link>
              </div>
              {/* Image placeholder */}
              <Image
                className="h-auto w-full max-w-[18rem] self-center lg:w-105 lg:max-w-none"
                src="/brand/limelogo.webp"
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
      <section className="relative z-10 py-24 mb-48 lg:py-24">
        <TeamSection members={MEMBERS}></TeamSection>
      </section>

      <div className="hidden lg:block md:block">
        <Footer />
      </div>

    </main>
  );
}
