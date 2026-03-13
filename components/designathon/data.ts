import { Criteria, DesignathonEvent, Judge, Prize } from "./types";

export const designathonSchedule: DesignathonEvent[] = [
  {
    time: "FRIDAY 3/20 9:45AM",
    title: "kickoff presentation",
    description:
      "In the opening ceremony for the Designathon, we will introduce the prompt, announce judges and mentors, and pair anyone who still needs a team.",
    location: "CENTER FOR DESIGN (102 RYDER HALL) ",
  },
  {
    time: "FRIDAY 3/20 10:00AM",
    title: "ideation with mentors",
    description:
      "After kickoff, teams can ask questions and get feedback from mentors moving around the room to support each group.",
    location: "CENTER FOR DESIGN (102 RYDER HALL) )",
  },
  {
    time: "SATURDAY 3/21 11:59PM",
    title: "submissions due",
    description: "Send final presentations to interventions@outlook.com.",
  },
  {
    time: "SUNDAY 3/22 1:45PM",
    title: "final presentations",
    description:
      "Each team will have ten minutes to present their final product to a panel of judges, evaluated using the criteria below.",
    location: "ISEC AUDITORIUM",
  },
  {
    time: "SUNDAY 3/22 4:30PM",
    title: "awards ceremony",
    description:
      "During the Scout Conference closing ceremony, winners of each prize will be announced after final deliberation.",
    location: "ISEC AUDITORIUM",
  },
];

export const prizes: Prize[] = [
  {
    title: "redbull prize",
    image: "/images/redbull.webp",
  },
  {
    title: "surprise...",
    image: "/images/Question_Mark.svg",
    whiteBackground: true,
  },
  {
    title: "shake shack prize",
    image: "/images/shakeshack.png",
    whiteBackground: true,
  },
];

export const judges: Judge[] = [
  {
    name: "SNEHAL LADKE",
    title: "Senior UX Designer at MBTA",
    image: "/images/snehal-ladke-image.png",
  },
  {
    name: "JOSEPH SCHNACKERTZ",
    title: "Senior UX Researcher at Symbotic",
    image: "/images/joseph-schnackertz-image.jpg",
  },
  // { name: "Name", title: "Title" },
  // { name: "Name", title: "Title" },
];

export const judgingCriteria: Criteria[] = [
  {
    title: "originality + creativity",
    description:
      "Does the project present a unique idea or a new perspective on a familiar challenge?",
    icon: "/images/originalitycreativity.svg",
  },
  {
    title: "collaboration & process",
    description:
      "Does the work show clear collaboration, coordination, and thoughtful planning among team members?",
    icon: "/collaborationprocess.svg",
  },
  {
    title: "functionality",
    description:
      "How well does it function? Is it usable, intuitive, and does it deliver on its core purpose?",
    icon: "/images/functionality.svg",
  },
  {
    title: "presentation",
    description:
      "How well was the project presented? Are concepts explained clearly, and do visuals support the project effectively?",
    icon: "/images/presentation.svg",
  },
  {
    title: "impact",
    description:
      "How big of an impact does it make? Does it address key challenges effectively?",
    icon: "/impact.svg",
  },
  {
    title: "thoughtfulness & technical execution",
    description:
      "How well is the concept realized? Is the technical implementation polished and does it respond to the prompt?",
    icon: "/thoughtfulnessTechnicalExecution.svg",
  },
];
