import Image from "next/image";

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

interface SpeakerProps {
    img: string;
    name: string;
    title: string;
    description: string;
    link1: string;
    link2: string;
}

export default function SpeakerCard({ img, name, title, description, link1, link2 }: SpeakerProps) {
    const hasSpeakerImage = Boolean(img) && img !== "/assets/speaker-placeholder.png";

    return (
        <article className="flex flex-col rounded-2xl bg-transparent p-6 shadow-[0_4px_10px_0_rgba(0,0,0,0.25)] md:p-8">
            <div>
                <div className="relative w-full aspect-video overflow-hidden">
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
            <div className="mt-10 flex flex-col gap-7">
                <div>
                    <h3 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.02em] text-cream md:text-[2.25rem]">{name}</h3>
                    <p className="mt-2 text-xl font-bold uppercase leading-tight tracking-[-0.02em] text-cream md:text-[1.5625rem]">{title}</p>
                </div>
                <p className="text-sm leading-relaxed tracking-[-0.01em] text-cream/90 md:text-base">
                    {description}
                </p>
                <div className="flex flex-col gap-3">
                    <a
                        href={link1}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-[-0.02em] text-cream transition-opacity hover:opacity-90"
                    >
                        <ArrowRightIcon />
                        <span>Learn More</span>
                    </a>
                    <div className="flex gap-3 text-magenta">
                        <a
                            href={link1}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="transition-colors hover:text-cream"
                        >
                            <LinkedinIcon />
                        </a>
                        <a
                            href={link2}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="transition-colors hover:text-cream"
                        >
                            <InstagramIcon />
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
}
