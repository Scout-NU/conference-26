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
  speakers: Speaker[];
}

export const Tracks = [
  {
    name: 'Intention',
    speakers: [
      {
        id: "alice-johnson",
        img: "/images/alice.jpg",
        name: "Alice Johnson",
        title: "React Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/alicejohnson",
        link2: "https://instagram.com/alicejohnson",
      },
      {
        id: "bob-smith",
        img: "/images/bob.jpg",
        name: "Bob Smith",
        title: "UI Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/bobsmith",
        link2: "https://instagram.com/bobsmith",
      },
    ]
  },
  {
    name: 'Investigation',
    speakers: [
      {
        id: "charlie-lee",
        img: "/images/charlie.jpg",
        name: "Charlie Lee",
        title: "Node.js Engineer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/charlielee",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "dana-white",
        img: "/images/dana.jpg",
        name: "Dana White",
        title: "UX Designer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
          link1: "https://linkedin.com/in/danawhite",
        link2: "https://instagram.com/danawhite",
      },
    ]
  }
]