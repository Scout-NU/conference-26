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

const goals = [
  {
    title: "Goal 1 yesss",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
  },
  {
    title: "Goal 2 yesss",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
  },
  {
    title: "Goal 3 yesss",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an ",
  },
];

export default function Home() {
  return (
    <main>
      <ScrollFrameAnimation />
      {/* Hero Section */}
      <section className="bg-zinc-200/20 px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-start justify-between">
            <h1 className="text-7xl font-medium tracking-tight text-black md:text-8xl lg:text-[107px]">
              Entangle
            </h1>
            {/* Scout icon placeholder */}
            <div className="hidden size-16 rounded-full bg-zinc-300 lg:block" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white/20 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Image placeholder */}
          <div className="aspect-[4/3] w-full rounded-[19px] bg-zinc-300 lg:aspect-auto lg:h-[383px]" />

          {/* Content */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-3xl font-medium tracking-tight text-black lg:text-4xl">
              About ENTANGLE
            </h2>
            <p className="text-xl leading-relaxed text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="bg-zinc-100 px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-16 text-center text-4xl font-medium tracking-tight text-black lg:text-5xl">
            Goals haha
          </h2>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {goals.map((goal) => (
              <div key={goal.title} className="flex flex-col items-center">
                <StarIcon className="mb-6 size-32 text-zinc-300 lg:size-48" />
                <h3 className="mb-4 text-2xl font-medium text-black lg:text-3xl">
                  {goal.title}
                </h3>
                <p className="text-center text-xl leading-relaxed text-black">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Interventions Section */}
      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-4xl font-medium tracking-tight text-black lg:text-5xl">
            About Interventions
          </h2>
          <p className="mb-10 text-xl leading-relaxed text-black">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an
          </p>
          <Button
            asChild
            variant="outline"
            className="h-14 rounded-full border-[1.5px] border-black px-6 text-xl font-medium hover:bg-zinc-50"
          >
            <Link href="https://scout.com" target="_blank" rel="noopener">
              Scout Website
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
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
