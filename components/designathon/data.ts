import { Criteria, DesignathonEvent, Judge } from "./types";

export const designathonSchedule: DesignathonEvent[] = [
  {
    time: "Friday 3/20 9:45am",
    title: "Kickoff Presentation",
    description:
      "In the opening ceremony for the Designathon, we will introduce the prompt, announce judges and mentors, and pair anyone who still needs a team.",
    location: "Center for Design (102 Ryder Hall)",
  },
  {
    time: "Friday 3/20 10:00am",
    title: "Ideation with Mentors",
    description:
      "After kickoff, teams can ask questions and get feedback from mentors moving around the room to support each group.",
    location: "Center for Design (102 Ryder Hall)",
  },
  {
    time: "Saturday 3/21 11:59pm",
    title: "Submissions Due",
    description: "Send final presentations to interventions@outlook.com.",
  },
  {
    time: "TBD",
    title: "Final Presentations",
    description:
      "Each team will have ten minutes to present their final product to a panel of judges, evaluated using the criteria below.",
    location: "ISEC Auditorium",
  },
  {
    time: "TBD",
    title: "Awards Ceremony",
    description:
      "During the Scout Conference closing ceremony, winners of each prize will be announced after final deliberation.",
    location: "ISEC Auditorium",
  },
];

export const prizes = ["Thing", "Thing", "Thing"];

export const judges: Judge[] = [
  { name: "Name", title: "Title" },
  { name: "Name", title: "Title" },
  { name: "Name", title: "Title" },
  { name: "Name", title: "Title" },
];

export const judgingCriteria: Criteria[] = [
  {
    title: "Originality + Creativity",
    description:
      "Does the project present a unique idea or a new perspective on a familiar challenge?",
  },
  {
    title: "Collaboration & Process",
    description:
      "Does the work show clear collaboration, coordination, and thoughtful planning among team members?",
  },
  {
    title: "Functionality",
    description:
      "How well does it function? Is it usable, intuitive, and does it deliver on its core purpose?",
  },
  {
    title: "Presentation",
    description:
      "How well was the project presented? Are concepts explained clearly, and do visuals support the project effectively?",
  },
  {
    title: "Impact",
    description:
      "How big of an impact does it make? Does it address key challenges effectively?",
  },
  {
    title: "Thoughtfulness & Technical Execution",
    description:
      "How well is the concept realized? Is the technical implementation polished and responsive to the prompt?",
  },
];
