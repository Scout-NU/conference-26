export default function AboutSection() {
  return (
    <section className="px-6 md:px-8 lg:px-[136px] py-16 lg:py-20 border-y border-cream/10">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-[60px]">
        {/* Description */}
        <div className="flex-1 flex flex-col gap-8 lg:gap-[46px]">
          <h2 className="font-clash text-4xl md:text-5xl lg:text-[64px] text-cream">
            About
          </h2>
          <div className="text-cream text-base md:text-lg leading-relaxed space-y-4">
            <p>
              This Designathon invites students to explore the conference theme
              Entangle through a collaborative design process. Working in teams
              of 2–4, participants will respond to a prompt connected to the
              relationships between humans, technologies, and environments
              across interconnected systems.
            </p>
            <p>
              Teams will move through research, ideation, and prototyping to
              examine how interactions shape the world around us. This is an
              opportunity to experiment with design as a way to understand
              complex, intertwined processes and systems.
            </p>
          </div>
        </div>

        {/* Event Details */}
        <div className="lg:w-[461px] flex-shrink-0">
          <div className="flex">
            <div className="w-[9px] bg-cream self-stretch mr-5" />
            <div className="flex flex-col gap-4 font-clash text-cream text-xl md:text-2xl">
              <p>
                <span className="text-cream/70">THEME:</span>&nbsp;&nbsp;&nbsp;&nbsp;Design and Technology
              </p>
              <p>
                <span className="text-cream/70">DATE:</span>&nbsp;&nbsp;&nbsp;&nbsp;March 20th - March 22nd
              </p>
              <p>
                <span className="text-cream/70">LOCATIONS:</span>&nbsp;&nbsp;&nbsp;&nbsp;Center for Design, ISEC
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
