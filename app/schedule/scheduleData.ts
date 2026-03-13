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
        "Breakfast will include an assortment of freshly baked pastries and sliced fresh fruit platters.",        
        location: "Atrium",
        // knots: ["impact_pink"],
      },
      {
        name: "Morning Networking",
        description:
        "Start with an open and welcoming space to connect with fellow attendees over coffee and conversation.",
        location: "Atrium",
      }
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
        name: "Panel 01",
        description:
          "DATA VISUALIZATION",
        location: "Auditorium",
        // knots: ["impact_pink"],
      },
       {
        name: "Panel 02",
        // speaker: "Speaker",
        description:
          "SMART TEXTILES & BIODESIGN",
        location: "ROOM 140",
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
        "Enjoy a provided meal with other attendees! ",
        location: "Atrium",
      },
      {
        name: "Poster Presentations",
        description:
        "Admire and engage with exciting work being done by Northeastern students through their poster presentations.",
        location: "Atrium",
      },
      {
        name: "Midday Networking",
        description:
        "Get to know Northeastern design professors and hear more about their experience in the industry and as teachers of the subject.",
        location: "Atrium",
      },
    ],
  },
  {
    time: "12:45 PM",
    events: [
      {
        name: "student presenters",
        description:
          "Hear and engage with exciting work being done by Northeastern students.",
        location: "ROOM 140",
        // knots: ["investigation_yellow"],
      },
      {
        name: "FROM INFORMATION TO INTUITION",
        speaker: "TIANGE WANG",
        description:
        "Learn about human scale ways to experience abstract tech.",
        location: "AUDITORIUM",
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
        name: "headshots + Tabling",
        description:
        "Receive an amazing headshot from Scout’s media team for your professional profile. Connect with other attendees and talk with representatives from the Center for Design and Scout.",
        location: "Atrium",
      },
      {
        name: "designathon presentations",
        description:
        "Enjoy learning about new projects from the talented designation participants.",
        location: "Auditorium",
      },
      {
        name: "FROM FRAME TO PRESENCE",
        description:
        "Learn about designing an AI and XR workflow for immersive storytelling.",
        location: "ROOM 142",
      },
    ],
  },
  {
    time: "2:45 PM",
    events: [
      {
        name: "portfolio reviews",
        description:
          "Receive constructive feedback on your portfolio from seasoned professionals to help your work shine!",
        location: "Atrium",
        // knots: ["impact_pink"],
      },
      {
        name: "making dreams a reality",
        speaker: "STEVEN MAX PATTERSON & Y. JENNY WANG",
        description:
          "",
        location: "auditorium",
        // knots: ["intention_blue"],
      },
      {
        name: "workshops",
        description:
        "Explore various workshops!",
        location: "ROOM 142",
      },
    ],
  },
  {
    time: "3:30 PM",
    events: [
      {
        name: "panel 03",
        speaker: "accessibility and autonomy in the digital age",
        description:
          "",
        location: "auditorium",
      },
    ],
  },
  {
    time: "4:00 PM",
    events: [
      {
        name: "closing ceremony & designathon winners",
        description:
          "Close out the day by joining us as we celebrate all the learning and inspiration that happened.",
        location: "Auditorium",
      },
    ],
  },
];