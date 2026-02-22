export interface Speaker {
  id: string;
  img: string;
  name: string;
  title: string;
  description: string;
  link1: string; // LinkedIn
  link2: string; // Instagram
}

export interface SpeakerTrack {
  name: string;
  img: string;
  speakers: Speaker[];
}

export const speakersData: SpeakerTrack[] = [
  {
    name: "Intention",
    img: "/assets/intention.png",
    speakers: [
      {
        id: "intention-1",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/alicejohnson",
        link2: "https://instagram.com/alicejohnson",
      },
      {
        id: "intention-2",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/bobsmith",
        link2: "https://instagram.com/bobsmith",
      },
      {
        id: "intention-3",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/alicejohnson",
        link2: "https://instagram.com/alicejohnson",
      },
      {
        id: "intention-4",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/bobsmith",
        link2: "https://instagram.com/bobsmith",
      },
      {
        id: "intention-5",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/alicejohnson",
        link2: "https://instagram.com/alicejohnson",
      },
      {
        id: "intention-6",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/bobsmith",
        link2: "https://instagram.com/bobsmith",
      },
    ],
  },
  {
    name: "Investigation",
    img: "/assets/investigation.png",
    speakers: [
      {
        id: "investigation-1",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/charlielee",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "investigation-2",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/danawhite",
        link2: "https://instagram.com/danawhite",
      },
      {
        id: "investigation-3",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/charlielee",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "investigation-4",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/danawhite",
        link2: "https://instagram.com/danawhite",
      },
      {
        id: "investigation-5",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/charlielee",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "investigation-6",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/danawhite",
        link2: "https://instagram.com/danawhite",
      },
    ],
  },
  {
    name: "Impact",
    img: "/assets/impact.png",
    speakers: [
      {
        id: "impact-1",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/charlielee",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "impact-2",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/danawhite",
        link2: "https://instagram.com/danawhite",
      },
      {
        id: "impact-3",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/charlielee",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "impact-4",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/danawhite",
        link2: "https://instagram.com/danawhite",
      },
      {
        id: "impact-5",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/charlielee",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "impact-6",
        img: "/assets/speaker-placeholder.png",
        name: "[Speaker Name]",
        title: "Title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/danawhite",
        link2: "https://instagram.com/danawhite",
      },
    ],
  },
];
