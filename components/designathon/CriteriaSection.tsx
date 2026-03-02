interface Criterion {
  title: string;
  description: string;
}

const criteria: Criterion[] = [
  {
    title: "Originality + Creativity",
    description:
      "Does the project present a unique idea or a new perspective on a familiar challenge?",
  },
  {
    title: "Collaboration & Process",
    description:
      "Does the work show clear collaboration, coordination, and thoughtful planning among team members?",
  },
  {
    title: "Functionality",
    description:
      "How well does it function? Is it usable, intuitive, and does it deliver on its core purpose?",
  },
  {
    title: "Presentation",
    description:
      "How well was the project presented? Are the concepts explained clearly? Do the visuals or slides support the project effectively?",
  },
  {
    title: "Impact",
    description:
      "How big of an impact does it make? Does it address key challenges effectively?",
  },
  {
    title: "Thoughtfulness & Technical Execution",
    description:
      "How well is the concept realized? Is the technical implementation polished and does it respond to the prompt?",
  },
];

export default function CriteriaSection() {
  return (
    <section className="px-6 md:px-8 lg:px-[110px] py-16 lg:py-[94px] overflow-hidden">
      <h2 className="font-clash text-4xl md:text-5xl lg:text-[64px] text-cream mb-10 lg:mb-[152px]">
        Judging Criteria
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-x-[111px] lg:gap-y-[53px]">
        {criteria.map((criterion, index) => (
          <div key={index} className="flex gap-4 lg:gap-[22px]">
            {/* Icon Placeholder */}
            <div className="w-16 h-16 lg:w-24 lg:h-24 bg-neutral-300 rounded-2xl flex-shrink-0" />
            {/* Content */}
            <div className="flex flex-col gap-1">
              <h3 className="font-clash text-lg md:text-xl lg:text-2xl text-cream">
                {criterion.title}
              </h3>
              <p className="text-cream text-sm md:text-base lg:text-lg leading-relaxed">
                {criterion.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
