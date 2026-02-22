import Image from "next/image";

export default function DecorativeBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[-4rem] z-0 hidden h-[26rem] w-full overflow-hidden md:block md:top-[-6rem] md:h-[34rem]"
      >
        <Image
          src="/assets/designathon/blue-vector.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-right-top opacity-95 mix-blend-screen"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-18rem] top-[14rem] z-0 hidden h-[42rem] w-[42rem] overflow-hidden md:block md:left-[-22rem] md:top-[8rem] md:h-[56rem] md:w-[56rem]"
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
