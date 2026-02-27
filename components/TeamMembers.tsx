"use client";
import React, { useState } from 'react'


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

    return (
        <div className="mx-auto max-w-6xl justify-center">
            <h1 className="text-xl font-medium tracking-tight lg:text-2xl">
                meet the team
            </h1>
            {/* team nav */}
            <div className="flex flex-row py-8 justify-between">
                {TEAMS.map((team) => (
                    <div
                        key={team}
                        onClick={() => setActiveTeam(team)}
                        className={`px-4 py-2 text-xl font-medium capitalize transition-colors border-b-2 -mb-px
              ${activeTeam === team
                                ? "border-lime"
                                : "border-transparent"}`}>
                        {team}
                    </div>
                ))}   
            </div>
            {/* members */}
            <div className="grid gap-8 grid-cols-4">
                {currentTeam.map((member) => (
                    <div key={member.name} className="flex flex-col gap-2">
                        {member.image && member.image !== "/images/placeholder.png" ? (
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full aspect-square object-cover border border-lime"
                            />
                        ) : (
                            <div className="w-full aspect-square border border-lime" aria-hidden="true" />
                        )}
                        <h2 className="text-xl font-medium">{member.name}</h2>
                        <p className="font-pp-neue text-lg text-lime">{member.role}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeamSection;