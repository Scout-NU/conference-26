import Image from "next/image";

export default function DecorativeBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10rem] top-[-6rem] z-0 hidden h-[30rem] w-[120vw] max-w-none overflow-hidden md:block md:right-[-14rem] md:top-[-10rem] md:h-[46rem] md:w-[130vw] lg:right-[-25rem] lg:top-[5rem] lg:h-[58rem] lg:w-[140vw]"
      >
        <Image
          src="/assets/designathon/blue-vector.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-right-top opacity-100 mix-blend-screen"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-18rem] top-[14rem] hidden h-[42rem] w-[42rem] overflow-hidden md:block md:left-[-22rem] md:top-[8rem] md:h-[56rem] md:w-[56rem] lg:left-[47rem] lg:top-[-7rem] lg:h-[72rem] lg:w-[72rem]"
      >
        <Image
          src="/assets/designathon/purple-vector.webp"
          alt=""
          fill
          sizes="(min-width: 768px) 56rem, 42rem"
          className="object-contain object-left-top opacity-80 mix-blend-screen"
        />
      </div>
    </>
  );
}
