export type Knot = "impact_pink" | "intention_blue" | "investigation_yellow";

export interface Event {
  name: string;
  speaker?: string;
  description: string;
  location: string;
  knots?: Knot[];
}

export interface TimeSlot {
  time: string;
  events: Event[];
}

export const scheduleData: TimeSlot[] = [
  {
    time: "8:45 AM",
    events: [
      {
        name: "Sign-in",
        description:
          "Check-in, check your coat, and receive your official Entangle badge and stickers!",
        location: "Atrium",
      },
      {
        name: "Breakfast",
        description:
        "Breakfast will include an assortment of freshly baked pastries and sliced fresh fruit platters as well as water and coffee to keep guests hydrated and energized for the day.",        
        location: "Atrium",
        // knots: ["impact_pink"],
      },
    ],
  },
  {
    time: "9:15 AM",
    events: [
      {
        name: "Opening Ceremony",
        description:
        "We'll officially kick off the day with the Entangle opening ceremony, where you'll learn about our schedule of events and hear opening remarks from the Scout Conference team!",
        location: "Auditorium",
      },
    ],
  },
  {
    time: "9:45 AM",
    events: [
      {
        name: "keynote speaker",
        speaker: "XIN XIN",
        description: "Reshaping language and power through socially-engaged software. \n Learn about the power of collectives in building a more equitable digital future with Xin Xin, Co-Executive Director of Processing Foundation and Assistant Professor of Interaction and Media Design at The New School. Through mediating, subverting, and innovating modes of social interaction in the digital space, Xin invites participants to relate to one another and experience togetherness in new and unfamiliar ways.",
        location: "Auditorium",
        // knots: ["intention_blue"],
      },
    ],
  },
  {
    time: "10:45 AM",
    events: [
      {
        name: "Making the Invisible Public: Designing Emotional Data Experiences for Collective Life",
        speaker: "Steven Geofrey, Paolo Ciuccarelli, and Pedro Cruz ",
        description:
          "This panel explores how designers use data, computation, and interaction to make complex collective systems publicly legible through immersive, affective, and participatory platforms.",
        location: "Auditorium",
        // knots: ["impact_pink"],
      },
      {
        name: "Living Textiles and Microbial Computations",
        speaker: "KATIA ZOLOTOVSKY",
        description:
          "More details to come!",
        location: "Classroom 140 & 142",
        // knots: ["impact_pink"],
      },
    ],
  },
  {
    time: "11:45 AM",
    events: [
      {
        name: "lunch",
        description:
        "For lunch, a classic sandwich buffet will be provided, featuring turkey and provolone, green goddess chicken salad, and vegan falafel on assorted breads. The meal will be accompanied by house-made potato chips, mixed green salad with red wine vinaigrette, pickles, and an assortment of cookies. Additionally, a water station will be available to keep guests hydrated. Dessert will consist of gluten-free brownies.",
        location: "Atrium",
      },
      // {
      //   name: "mentor chats",
      //   description:
      //   "While or after enjoying your meal, get to know a few Northeastern professors and hear more about their experience in the industry and as teachers of the subject.",
      //   location: "Atrium",
      // },
    ],
  },
  {
    time: "12:45 PM",
    events: [
      {
        name: "From Information to Intuition: Human-Scale Ways to Experience Abstract Tech",
        speaker: "TIANGE WANG",
        description:
        "Learn ways designers can translate data- and model-driven systems into tangible, playful encounters. We’ll explore how materiality, interaction, and performance can help audiences build intuition for complex ideas like climate signals, GenAI meaning drift, and probability.",
        location: "AUDITORIUM",
      },
      {
        name: "Student Keynote Presentations",
        description:
          "Hear and engage with exciting work being done by some Northeastern undergraduate and graduate students through their slide presentations and brief Q&A sessions.",
        location: "Classroom 140",
        // knots: ["investigation_yellow"],
      },
      {
        name: "Lobby Activities",
        description:
        "Our Conference team has also created interactive installations to encourage guests to reflect on their own entanglement and the collective overlap and unique experiences of all of the attendees.",
        location: "Atrium",
      },
    ],
  },
  {
    time: "1:45 PM",
    events: [
      {
        name: "designathon presentations",
        speaker: "Joseph Schnackertz and Snehal Ladkes",
        description:
        "See and experience the hard work of all of the Entangle designathon participants during their 36 work period as they present their final presentations to the panel of judges.",
        location: "Auditorium",
      },
      {
        name: "Tabling",
        description:
        "Hear from a few Northeastern organizations about their exciting academic and industry projects in design and technology.",
        location: "Atrium",
      },
      {
        name: "Professional Headshots",
        speaker: "Scout Media Team",
        description:
        "Need a fresh, high-quality headshot? Stop by the second floor of ISEC, where the Scout Media team will be stationed to capture polished photos for LinkedIn, portfolios, and more!",
        location: "ISEC 2nd Floor",
      },
      {
        name: "From Frame to Presence - Designing an AI & XR Workflow for Immersive Storytelling",
        speaker: "Sokhean Jonathan Ouk",
        description:
        "An introduction to using AI and XR tools to design immersive storytelling experiences, with a focus on practical workflows for creating and translating content across 3D, VR, and 360 media.",
        location: "Classroom 142",
      },
    ],
  },
  {
    time: "2:45 PM",
    events: [
      {
        name: "making dreams a reality",
        speaker: "STEVEN MAX PATTERSON and Y. JENNY WANG",
        description:
          "Get to know the journey with six clinician led development teams comprising their first medical XR accelerator cohort. From Apple Vision Pro technical training, to training on medical workflows, and medical device management through working with clinical domain experts to build prototypes of solutions to real medical problems.",
        location: "auditorium",
        // knots: ["intention_blue"],
      },
      {
        name: "(CONTINUED) From Frame to Presence - Designing an AI & XR Workflow for Immersive Storytelling",
        speaker: "Sokhean Jonathan Ouk",
        description:
        "An introduction to using AI and XR tools to design immersive storytelling experiences, with a focus on practical workflows for creating and translating content across 3D, VR, and 360 media.",
        location: "Classroom 142",
      },
      {
        name: "portfolio reviews",
        description:
          "Receive expert feedback on your portfolio from industry professionals. Whether you're fine-tuning your work or preparing for job opportunities, this session will help you refine your presentation and make a lasting impact.",
        location: "Atrium",
        // knots: ["impact_pink"],
      },
    ],
  },
  {
    time: "3:30 PM",
    events: [
      {
        name: "Accessibility and Autonomy in the Digital Age Panel",
        speaker: "HUGH GUINEY, ISKRA ALEXIEVA JONES, and EILEEN MCGIVNEY (Moderator)",
        description:
          "More details to come!",
        location: "auditorium",
      },
    ],
  },
  {
    time: "4:30 PM",
    events: [
      {
        name: "Closing Ceremony",
        description:
          "We’ll officially end the night with brief closing remarks and reflections as well as announce the winners of the Entangle designathon.",
        location: "Auditorium",
      },
    ],
  },
  {
    time: "5:00 PM",
    events: [
      {
        name: "Networking and Goodbye",
        description:
          "",
        location: "Atrium",
      },
    ],
  },
];
