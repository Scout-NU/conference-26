"use client";
import React, { useState } from 'react'
import Image from "next/image";


export interface Member {
    name: string;
    role: string;
    image: string;
    team: Team
}

export type Team = "operations" | "design" | "experience design" | "marketing" | "tech";
const TEAMS: Team[] = ["operations", "design", "experience design", "marketing", "tech"];

export interface TeamProps {
    members: Member[];
}

const TeamSection = ({ members }: TeamProps) => {
    const [activeTeam, setActiveTeam] = useState<Team>("operations");
    const currentTeam = members.filter((m) => m.team === activeTeam);
    const maxTeamSize = Math.max(
        ...TEAMS.map((team) => members.filter((member) => member.team === team).length)
    );
    const placeholdersNeeded = maxTeamSize - currentTeam.length;

    return (
        <div className="mx-auto max-w-6xl justify-center px-4 md:px-0">
            <h1 className="text-[clamp(2rem,8vw,2.5rem)] font-medium tracking-tight lg:text-[6rem]">
                meet the team
            </h1>
            {/* team nav */}
            <div className="flex flex-wrap gap-2 py-8 md:flex-row md:justify-between">
                {TEAMS.map((team) => (
                    <div
                        key={team}
                        onClick={() => setActiveTeam(team)}
                        className={`font-pp-neue shrink-0 px-3 py-2 text-base font-medium capitalize transition-colors border-b-2 md:-mb-px md:px-4 md:text-xl
              ${activeTeam === team
                                ? "border-lime"
                                : "border-transparent"}`}>
                        {team}
                    </div>
                ))}   
            </div>
            {/* members */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {currentTeam.map((member) => (
                    <div key={member.name} className="flex flex-col gap-2">
                        {member.image && member.image !== "/images/placeholder.webp" ? (
                            <div className="relative w-full aspect-square border border-lime">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    sizes="(max-width: 1024px) 45vw, 20vw"
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="w-full aspect-square border border-lime" aria-hidden="true" />
                        )}
                        <h2 className="font-pp-neue text-xl font-medium uppercase">{member.name}</h2>
                        <p className="font-pp-neue text-lg text-lime">{member.role}</p>
                    </div>
                ))}
                {Array.from({ length: placeholdersNeeded }).map((_, index) => (
                    <div key={`placeholder-${index}`} className="invisible flex flex-col gap-2" aria-hidden="true">
                        <div className="w-full aspect-square border border-lime" />
                        <h2 className="font-pp-neue text-xl font-medium uppercase">Placeholder Name</h2>
                        <p className="font-pp-neue text-lg text-lime">Placeholder Role</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamSection;