export interface Event {
  time: string;
  name: string;
  description: string;
  location: string;
}

export const scheduleData: Event[] = [
  {
    time: "9:00 AM",
    name: "Opening Keynote",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    location: "Main Auditorium",
  },
  {
    time: "10:30 AM",
    name: "Tech Workshop",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    location: "Room 201",
  },
  {
    time: "11:00 AM",
    name: "Panel Discussion",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    location: "Conference Hall",
  },
  {
    time: "1:00 PM",
    name: "Lunch Break",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    location: "Cafeteria",
  },
  {
    time: "2:30 PM",
    name: "Breakout Sessions",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry.",
    location: "Various Rooms",
  },
  {
    time: "4:00 PM",
    name: "Closing Remarks",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    location: "Main Auditorium",
  },
];