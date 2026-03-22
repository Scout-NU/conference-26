import Image from "next/image";

export default function DecorativeBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-11rem] top-[4rem] z-0 h-[20rem] w-[150vw] max-w-none overflow-hidden opacity-75 sm:right-[-10rem] sm:h-[24rem] sm:w-[140vw] md:right-[-14rem] md:top-[-10rem] md:h-[46rem] md:w-[130vw] md:opacity-100 lg:right-[-25rem] lg:top-[5rem] lg:h-[58rem] lg:w-[140vw]"
      >
        <Image
          src="/assets/designathon/blue-vector.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-contain object-right-top opacity-100 mix-blend-screen"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rotate-270 left-[18rem] h-[26rem] w-[26rem] overflow-hidden opacity-70 sm:left-[160rem] sm:top-[20rem] sm:h-[32rem] sm:w-[32rem] md:left-[-22rem] md:top-[8rem] md:h-[56rem] md:w-[56rem] md:opacity-100 lg:rotate-0 lg:left-[47rem] lg:top-[-7rem] lg:h-[72rem] lg:w-[72rem]"
      >
        <Image
          src="/assets/designathon/purple-vector.png"
          alt=""
          fill
          sizes="(min-width: 768px) 56rem, 42rem"
          className="object-contain object-left-top opacity-80 mix-blend-screen"
        />
      </div>
    </>
  );
}
