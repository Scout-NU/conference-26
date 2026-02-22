import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";

interface SpeakerProps {
    img: string;
    name: string;
    title: string;
    description: string;
    link1: string;
    link2: string;
}

export default function SpeakerCard({ img, name, title, description, link1, link2 }: SpeakerProps) {
    return (
        <div className="flex flex-col rounded-[16px] bg-[#1a1a1a] overflow-hidden shadow-[0_4px_10px_0_rgba(0,0,0,0.25)]">
            <div className="p-5">
                <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                        src={img}
                        alt={`${name} - Speaker`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-4 px-6 pb-6">
                <div>
                    <h1 className="text-xl md:text-2xl font-bold text-white">{name}</h1>
                    <h2 className="mt-1 text-base text-neutral-400">{title}</h2>
                </div>
                <p className="text-[#fffcec]/80 text-xs md:text-sm leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                        href={link1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white hover:opacity-90 transition-opacity cursor-pointer"
                    >
                        <HiArrowRight className="text-magenta text-lg shrink-0" />
                        <span>Learn More</span>
                    </a>
                    <div className="flex gap-3">
                        <a
                            href={link1}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-neutral-400 hover:text-white transition-colors"
                        >
                            <BsLinkedin className="text-lg" />
                        </a>
                        <a
                            href={link2}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-neutral-400 hover:text-white transition-colors"
                        >
                            <BsInstagram className="text-lg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
