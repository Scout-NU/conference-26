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
        name: "Opening Keynote",
        description:
          "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        location: "Main Auditorium",
        knots: ["knot-3", "knot-2"],
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
        knots: ["knot-3", "knot-2"],
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
        knots: ["knot-1", "knot-3"],
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