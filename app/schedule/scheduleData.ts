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
        location: "Main Auditorium"
      },
      {
        name: "Breakfast",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        location: "Room 201",
        knots: ["impact_pink"],
      },
    ],
  },
  {
    time: "10:30 AM",
    events: [
      {
        name: "Tech Workshop",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        location: "Room 201",
      },
      {
        name: "Tech Workshop",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        location: "Room 201",
      },
    ],
  },
  {
    time: "11:00 AM",
    events: [
      {
        name: "Panel Discussion",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
        location: "Conference Hall",
      },
    ],
  },
  {
    time: "1:00 PM",
    events: [
      {
        name: "Lunch Break",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
        location: "Cafeteria",
      },
    ],
  },
  {
    time: "2:30 PM",
    events: [
      {
        name: "Breakout Sessions",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
        location: "Various Rooms",
      },
    ],
  },
  {
    time: "4:00 PM",
    events: [
      {
        name: "Closing Remarks",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        location: "Main Auditorium",
      },
    ],
  },
];