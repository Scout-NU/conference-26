export interface NavLink {
  name: string
  route: string
}

export const NavbarLinks: NavLink[] = [
  { name: 'Schedule', route: '/schedule' },
  { name: 'Speakers', route: '/speakers' },
  { name: 'Designathon', route: '/designathon' },
]

export interface Speaker {
  id: string;
  img: string;
  name: string;
  title: string;
  description: string;
  link1: string; // LinkedIn
  link2: string; // Instagram
}

export interface Track {
  name: string;
  trackColor: string;
  img: string;
  speakers: Speaker[];
}

export const Tracks = [
  {
    name: 'Intention',
    trackColor: 'bg-magenta',
    img: '/assets/intention.png',
    speakers: [
      {
        id: "1",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/alicejohnson",
        link2: "https://instagram.com/alicejohnson",
      },
      {
        id: "2",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/bobsmith",
        link2: "https://instagram.com/bobsmith",
      },
    ]
  },
  {
    name: 'Investigation',
    trackColor: 'bg-lime',
    img: '/assets/investigation.png',
    speakers: [
      {
        id: "1",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/charlielee",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "2",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
          link1: "https://linkedin.com/in/danawhite",
        link2: "https://instagram.com/danawhite",
      },
    ]
  },
  {
    name: 'Impact',
    trackColor: 'bg-sky',
    img: '/assets/impact.png',
    speakers: [
      {
        id: "1",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/charlielee",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "2",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
          link1: "https://linkedin.com/in/danawhite",
        link2: "https://instagram.com/danawhite",
      },
    ]
  }
]