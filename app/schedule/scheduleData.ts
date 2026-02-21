export interface Event {
  name: string;
  speaker?: string;
  description: string;
  location: string;
  knots?: string[];
}

export interface TimeSlot {
  time: string;
  events: Event[];
}

export const scheduleData: TimeSlot[] = [
  {
    time: "9:00 AM",
    events: [
      {
        name: "Sign in",
        description:
          "Check-in, check your coat, receive your badge and swag with the official Entangle pamphlet, stickers, and other exciting goodies!",
        location: "Atrium",
      },
      {
        name: "Breakfast",
        description:
        "Breakfast will include an assortment of freshly baked pastries and sliced fresh fruit platters.",        location: "Atrium",
        knots: ["impact_pink"],
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
    time: "9:30 AM",
    events: [
      {
        name: "Opening Ceremony",
        description:
        "We'll officially kick off the day with the Entangle opening ceremony, where you'll learn about our schedule of events and hear opening remarks from the Scout Conference team!",    
        location: "Atrium",
      },
    ],
  },
  {
    time: "10:00 AM",
    events: [
      {
        name: "Panel 01",
        speaker: "Speaker",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        location: "Atrium",
        knots: ["intention_blue"],
      },
       {
        name: "Speaker 01",
        speaker: "Speaker",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        location: "Atrium",
        knots: ["impact_pink"],
      },
    ],
  },
  {
    time: "11:00 AM",
    events: [
      {
        name: "Workshop 01",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        location: "Atrium",
        knots: ["impact_pink"],
      },
       {
        name: "Speaker 02",
        speaker: "Speaker",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        location: "Atrium",
        knots: ["investigation_yellow"],
      },
    ],
  },
  {
    time: "12:00 PM",
    events: [
      {
        name: "Lunch Break",
        description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        location: "Atrium",
      },
      {
        name: "Poster Presentations",
        description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        location: "Atrium",
      },
      {
        name: "Midday Networking",
        description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        location: "Atrium",
      },
    ],
  },
  {
    time: "1:00 PM",
    events: [
      {
        name: "Panel 2",
        speaker: "Speaker",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        location: "Atrium",
        knots: ["investigation_yellow"],
      },
      {
        name: "Student Presenters",
        description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        location: "Atrium",
      },
      {
        name: "Lobby Activities",
        description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        location: "Atrium",
      },
    ],
  },
  {
    time: "2:00 PM",
    events: [
      {
        name: "Coffee Break + Tabling",
        description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        location: "Atrium",
      },
      {
        name: "Portfolio Reviews",
        description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        location: "Atrium",
      },
      {
        name: "Workshop 2",
        description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        location: "Atrium",
      },
    ],
  },
  {
    time: "3:00 PM",
    events: [
      {
        name: "Workshop 3",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        location: "Atrium",
        knots: ["impact_pink"],
      },
      {
        name: "Speaker 3",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        location: "Atrium",
        knots: ["intention_blue"],
      },
    ],
  },
  {
    time: "4:00 PM",
    events: [
      {
        name: "Closing Ceremony",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        location: "Atrium",
      },
    ],
  },
];