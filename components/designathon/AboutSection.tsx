export default function AboutSection() {
  return (
    <section id="about" className="border-y border-cream/10">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.25fr_0.75fr] md:px-10 md:py-20">
        <div className="space-y-6">
          <h2 className="font-clash text-[clamp(2rem,5vw,4rem)] leading-none">
            About
          </h2>
          <div className="max-w-[72ch] space-y-4 text-sm leading-relaxed text-cream/85 md:text-base">
            <p>
              This Designathon invites students to explore the conference theme
              Entangle through a collaborative design process. Working in teams
              of 2-4, participants will respond to a prompt connected to
              relationships between humans, technologies, and environments
              across interconnected systems.
            </p>
            <p>
              Teams will move through research, ideation, and prototyping to
              examine how interactions shape the world around us. It is an
              opportunity to experiment with design as a way to understand
              complex, intertwined systems.
            </p>
          </div>
        </div>

        <div className="border-l-4 border-cream pl-4 text-base leading-relaxed md:pl-6 md:text-lg">
          <p>THEME: Design and Technology</p>
          <p className="mt-2">DATE: March 20th - March 22nd</p>
          <p className="mt-2">LOCATIONS: Center for Design, ISEC</p>
        </div>
      </div>
    </section>
  );
}
