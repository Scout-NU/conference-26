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
          "Check-in, check your coat and collect your badge, the official Entangle sticker sheet, and other exciting goodies!",
        location: "Atrium",
      },
      {
        name: "Breakfast",
        description:
        "Breakfast will include an assortment of freshly baked pastries and sliced fresh fruit platters as well as water and coffee to keep guests hydrated and energized for the day.",        
        location: "Atrium",
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
        name: "Keynote Speaker",
        speaker: "Xin Xin",
        description: "More details to come!",
        location: "Auditorium",
      },
    ],
  },
  {
    time: "10:45 AM",
    events: [
      {
        name: "Data Visualization Panel",
        description: "More details to come!",
        location: "Auditorium",
      },
       {
        name: "Smart Textiles and Biodesign Panel",
        description: "More details to come!",
        location: "Classroom 140",
      },
    ],
  },
  {
    time: "11:45 AM",
    events: [
      {
        name: "Lunch",
        description: "For lunch, a classic sandwich buffet will be provided, featuring turkey and provolone, green goddess chicken salad, and vegan falafel on assorted breads. The meal will be accompanied by house-made potato chips, mixed green salad with red wine vinaigrette, pickles, and an assortment of cookies. Additionally, a water station will be available to keep guests hydrated. Dessert will consist of gluten-free brownies.",
        location: "Atrium",
      },
      {
        name: "Mentor Chats",
        description: "While or after enjoying your meal, get to know a few Northeastern professors and hear more about their experience in the industry and as teachers of the subject.",
        location: "Atrium",
      },
    ],
  },
  {
    time: "12:45 PM",
    events: [
      {
        name: "From Information to Intuition: Human-Scale Ways to Experience Abstract Tech",
        speaker: "Tiange Wang",
        description: "Many of today’s most important technologies are not immediately intuitive because they’re abstract, invisible, or uncertain. In this talk, I'll share ways designers can translate data- and model-driven systems into tangible, playful encounters. Not to oversimplify them, but to make them legible, experiential, and fun. We'll explore how materiality, interaction, and performance can help audiences build intuition for complex ideas like climate signals, GenAI meaning drift, and probability.",
        location: "Auditorium",
      },
      {
        name: "Student Keynote Presentations",
        description: "Hear and engage with exciting work being done by four Northeastern undergraduate and graduate students through their slide presentations and brief Q&A sessions.",
        location: "Classroom 140",
      },
      {
        name: "Lobby Activities & Installations",
        description: "Our Conference team has also created an interactive installation to encourage guests to reflect on their own entanglement and the collective overlap and unique experiences of all of the attendees. The final product will be put on display in Ryder Hall after the conference.",
        location: "Atrium",
      },
    ],
  },
  {
    time: "1:45 PM",
    events: [
      {
        name: "Designathon Presentations",
        speaker: "Joseph Schnackertz and Snehal Ladke",
        description: "See and experience the hard work of all of the Entangle designathon participants during their 36 work period as they present their final presentations to the panel of judges.",
        location: "Auditorium",
      },
      {
        name: "Tabling",
        description: "Hear from a few Northeastern organizations about their exciting academic and industry projects in design and technology.",
        location: "Atrium",
      },
      {
        name: "Professional Headshots",
        speaker: "Scout Media Team",
        description: "Need a fresh, high-quality headshot? Stop by the second floor of ISEC, where the Scout Media team will be stationed to capture polished photos for LinkedIn, portfolios, and more!",
        location: "ISEC 2nd Floor",
      }, 
       {
        name: "From Frame to Presence - Designing an AI & XR Workflow for Immersive Storytelling",
        speaker: "Johnny Ouk",
        description: "More details to come!",
        location: "ISEC 140",
      },
    ],
  },
  {
    time: "2:45 PM",
    events: [
      {
        name: "Making Dreams a Reality",
        speaker: "Steven Max Patterson & Y. Jenny Wang",
        description: "More details to come!",
        location: "Auditorium",
      },
      {
        name: "Portal Workshop with NU Oakland",
        description: "More details to come!",
        location: "Classroom 142",
      },
      {
        name: "Portfolio Reviews",
        description: "Receive expert feedback on your portfolio from industry professionals and Northeastern professors from the College of Arts, Media, and Design. Whether you're fine-tuning your work or preparing for job opportunities, this session will help you refine your presentation and make a lasting impact.",
        location: "Atrium",
      },
    ],
  },
  {
    time: "3:30 PM",
    events: [
      {
        name: "Accessibility and Autonomy in the Digital Age Panel",
        description: "More details to come!",
        location: "Auditorium",
      },
    ],
  },
  {
    time: "4:30 PM",
    events: [
      {
        name: "Closing Ceremony",
        description: "We’ll officially end the night with brief closing remarks and reflections as well as announce the winners of the Entangle designathon.",
        location: "Auditorium",
      },
    ],
  },
  {
    time: "5:00 PM",
    events: [
      {
        name: "Networking and Goodbye",
        description: "",
        location: "Atrium",
      },
    ],
  },
];