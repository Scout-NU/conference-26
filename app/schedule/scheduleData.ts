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
        description: "Learn about the power of collectives in building a more equitable digital future from Xin Xin,  Co-Executive Director and Processing Foundation Assistant Professor of Interaction and Media Design at The New School.",
        location: "Auditorium",
        // knots: ["intention_blue"],
      },
    ],
  },
  {
    time: "10:45 AM",
    events: [
      {
        name: "Data Visualization Panel",
        description:
          "More details to come!",
        location: "Auditorium",
        // knots: ["impact_pink"],
      },
       {
        name: "Smart Textiles & Biodesign Panel",
        // speaker: "Speaker",
        description:
          "More details to come!",
        location: "Classroom 140",
        // knots: ["investigation_yellow"],
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
      {
        name: "mentor chats",
        description:
        "While or after enjoying your meal, get to know a few Northeastern professors and hear more about their experience in the industry and as teachers of the subject.",
        location: "Atrium",
      },
    ],
  },
  {
    time: "12:45 PM",
    events: [
      {
        name: "From Information to Intuition: Human-Scale Ways to Experience Abstract Tech",
        speaker: "TIANGE WANG",
        description:
        "Learn about human scale ways to experience abstract tech.",
        location: "AUDITORIUM",
      },
      {
        name: "Student Keynote Presentations",
        description:
          "Hear and engage with exciting work being done by four Northeastern undergraduate and graduate students through their slide presentations and brief Q&A sessions.",
        location: "Classroom 140",
        // knots: ["investigation_yellow"],
      },
      {
        name: "Lobby Activities",
        description:
        "Get hands on with string entanglement boards and keychain making!",
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
        speaker: "Johnny Ouk",
        description:
        "More details to come!",
        location: "ROOM 140",
      },
    ],
  },
  {
    time: "2:45 PM",
    events: [
      {
        name: "making dreams a reality",
        speaker: "With Steven Max Patterson & Y. Jenny Wang",
        description:
          "More details to come!",
        location: "auditorium",
        // knots: ["intention_blue"],
      },
      {
        name: "Portal Workshop with NU Oakland",
        description:
        "More details to come!",
        location: "Classroom 142",
      },
      {
        name: "portfolio reviews",
        description:
          "Receive expert feedback on your portfolio from industry professionals and Northeastern professors from the College of Arts, Media, and Design. Whether you're fine-tuning your work or preparing for job opportunities, this session will help you refine your presentation and make a lasting impact.",
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
        // speaker: "accessibility and autonomy in the digital age",
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