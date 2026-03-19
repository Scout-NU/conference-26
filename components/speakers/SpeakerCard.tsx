"use client";

import Image from "next/image";
import { useState } from "react";

function ArrowRightIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-[1.125rem] w-[1.125rem] shrink-0 text-magenta"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    );
}

function LinkedinIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-[1.125rem] w-[1.125rem]"
            fill="currentColor"
        >
            <path d="M4.98 3.5a2.49 2.49 0 1 1 0 4.98 2.49 2.49 0 0 1 0-4.98Zm.02 6.5H2v12h3V10Zm4.5 0H7v12h2.97v-6.45c0-3.58 4.66-3.87 4.66 0V22H17v-7.5c0-5.84-6.67-5.62-7.53-2.75V10Z" />
        </svg>
    );
}

function InstagramIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-[1.125rem] w-[1.125rem]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
    );
}

function ExpandToggleIcon({ expanded }: { expanded: boolean }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-7 w-7 text-magenta"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
        >
            <path d="M5 12h14" />
            {!expanded ? <path d="M12 5v14" /> : null}
        </svg>
    );
}

interface SpeakerProps {
    img: string;
    name: string;
    title: string;
    description: string;
    link1: string;
    link2: string;
    trackImg: string;
}

export default function SpeakerCard({ img, name, title, description, link1, link2, trackImg }: SpeakerProps) {
    const hasSpeakerImage = Boolean(img) && img !== "/assets/speaker-placeholder.webp";
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article
            className={`speaker-card-shine relative overflow-hidden flex flex-col rounded-2xl border border-white/10 bg-white/10 p-6 shadow-[0_4px_10px_0_rgba(0,0,0,0.25)] supports-[backdrop-filter]:bg-white/5 supports-[backdrop-filter]:backdrop-blur-[1px] supports-[backdrop-filter]:backdrop-saturate-150 transition-[height] duration-300 md:p-8 ${isExpanded ? "h-auto" : "h-[42rem]"}`}
        >
            <div>
                <div className="relative w-full overflow-hidden aspect-[23.416667/18.75]">
                    {hasSpeakerImage ? (
                        <Image
                            src={img}
                            alt={`${name} - Speaker`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 24rem"
                        />
                    ) : (
                        <div className="h-full w-full" aria-hidden="true" />
                    )}
                </div>
            </div>
            <div className="mt-10 flex flex-1 flex-col gap-7">
                <div className="min-h-[8.5rem]">
                    <div className="flex items-center gap-3">
                        <h3 className="font-pp-neue text-[1.875rem] font-medium leading-tight tracking-[-0.02em] text-cream">{name}</h3>
                        <Image
                            src={trackImg}
                            alt=""
                            aria-hidden="true"
                            width={48}
                            height={30}
                            className="h-auto w-16 shrink-0"
                        />
                    </div>
                    <p className="font-pp-neue mt-2 text-[1.5rem] font-medium leading-[1.2] text-cream">{title}</p>
                </div>

                <div
                    className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${isExpanded ? "max-h-[100rem] opacity-100" : "max-h-0 opacity-0"}`}
                >
                    <p className="font-pp-neue text-[1.125rem] leading-relaxed tracking-[-0.01em] text-cream/90">
                        {description}
                    </p>
                </div>

                <div className="mt-auto flex items-center justify-between gap-3">
                    <a
                        href={link1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-pp-neue inline-flex w-fit items-center gap-2 text-[1rem] font-bold tracking-[-0.02em] text-cream transition-opacity hover:opacity-90"
                    >
                        <ArrowRightIcon />
                        <span>Learn More</span>
                    </a>

                    <button
                        type="button"
                        onClick={() => setIsExpanded((prev) => !prev)}
                        aria-expanded={isExpanded}
                        aria-label={`${isExpanded ? "Collapse" : "Expand"} ${name} description`}
                        className="inline-flex h-12 w-12 items-center justify-center text-magenta transition-opacity hover:opacity-80"
                    >
                        <ExpandToggleIcon expanded={isExpanded} />
                    </button>
                </div>
            </div>
        </article>
    );
}
