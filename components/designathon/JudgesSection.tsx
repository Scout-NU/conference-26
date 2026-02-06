interface Judge {
  name: string;
  title: string;
  image?: string;
}

const judges: Judge[] = [
  { name: "Name", title: "Title" },
  { name: "Name", title: "Title" },
  { name: "Name", title: "Title" },
  { name: "Name", title: "Title" },
];

export default function JudgesSection() {
  return (
    <section className="px-6 md:px-8 lg:px-[108px] py-16 lg:py-[109px] overflow-hidden">
      <h2 className="font-clash text-4xl md:text-5xl lg:text-[64px] text-cream mb-10 lg:mb-[193px]">
        Judges
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[56px]">
        {judges.map((judge, index) => (
          <div key={index} className="flex flex-col items-center gap-4 lg:gap-8">
            {/* Placeholder Image */}
            <div className="w-full max-w-[247px] aspect-[247/309] bg-neutral-300 rounded-[19px]" />
            {/* Judge Info */}
            <div className="text-center">
              <p className="font-clash text-2xl md:text-4xl lg:text-[40px] text-cream">
                {judge.name}
              </p>
              <p className="text-xl md:text-2xl lg:text-[25px] text-cream font-bold">
                {judge.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
