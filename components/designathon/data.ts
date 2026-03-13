import { Criteria, DesignathonEvent, Judge, Prize } from "./types";

export const designathonSchedule: DesignathonEvent[] = [
  {
    time: "FRIDAY 3/20 9:35AM",
    title: "kickoff presentation",
    description:
      "To kick off the Entangle designathon, the Scout Conference team will explain the prompt, introduce the judges and mentors, and connect any people that needs a team to work with.",
    location: "CENTER FOR DESIGN (102 RYDER HALL) ",
  },
  {
    time: "FRIDAY 3/20 10:00AM",
    title: "ideation with mentors",
    people: "With Ashley Treni, Snehal Ladke, and Joseph Schnackertz",
    description:
      "After the kickoff, teams be able to ask any questions or get feedback from a group of mentors who will be moving around the room to support all of the groups.",
    location: "CENTER FOR DESIGN (102 RYDER HALL) )",
  },
  {
    time: "SATURDAY 3/21 11:59PM",
    title: "submissions due",
    description: "Submit your final presentation into Devpost!.",
    location: "Online @ entangle-designation.devpost.com",
  },
  {
    time: "SUNDAY 3/22 1:45PM",
    title: "final presentations",
    description:
      "Each team will have 10 minutes to present their final product to a panel of judges, who will evaluate each group’s work based on the criteria below",
    location: "ISEC AUDITORIUM",
  },
  {
    time: "SUNDAY 3/22 4:30PM",
    title: "awards ceremony",
    description:
      "During the Entangle closing ceremony, after the judges have deliberated, the Conference team will announce the winners of each prize!",
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
