interface Prize {
  name: string;
  image?: string;
}

const prizes: Prize[] = [
  { name: "1ST PLACE" },
  { name: "2ND PLACE" },
  { name: "3RD PLACE" },
];

export default function PrizesSection() {
  return (
    <section className="px-6 md:px-8 lg:px-[114px] py-16 lg:py-[94px] overflow-hidden">
      <h2 className="font-clash text-4xl md:text-5xl lg:text-[64px] text-cream mb-10 lg:mb-[131px]">
        Prizes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-[88px]">
        {prizes.map((prize, index) => (
          <div key={index} className="flex flex-col items-center gap-6">
            {/* Placeholder Image */}
            <div className="w-full aspect-[345/328] bg-neutral-300 rounded-lg" />
            {/* Prize Name */}
            <p className="font-bold text-2xl md:text-4xl text-cream uppercase tracking-tight text-center">
              {prize.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
