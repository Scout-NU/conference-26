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
    img: "/assets/intention.webp",
    speakers: [
      {
        id: "intention-1",
        img: "/images/tiange-wang.webp",
        name: "Tiange Wang",
        title: "Design Lead, Software & Interaction, IDEO",
        description:
          "From Information to Intuition: Human-Scale Ways to Experience Abstract Tech. Many of today's most important technologies are not immediately intuitive because they're abstract, invisible, or uncertain. In this talk, I'll share ways designers can translate data- and model-driven systems into tangible, playful encounters. Not to oversimplify them, but to make them legible, experiential, and fun. We'll explore how materiality, interaction, and performance can help audiences build intuition for complex ideas like climate signals, GenAI meaning drift, and probability.",
        link1: "https://www.linkedin.com/in/tiange-wang/",
        link2: "https://instagram.com/alicejohnson",
      },
      {
        id: "intention-2",
        img: "/images/jenny-wang.webp",
        name: "Y. Jenny Wang, Ph.D.",
        title: "Director @ medVR Medical XR Accelerator",
        description:
          "Y. Jenny Wang, Ph.D. is the Director of medVR, where she leads program development for the Medical XR Accelerator and guides teams in building commercially-viable solutions to real-world medical challenges. She also serves as the Hardware Track Director of MIT Reality Hack. A multidisciplinary builder and strategist, her background spans business development, education, and product design. She has developed go-to-market strategies, led VR and electronics workshops, and founded two companies, including Clever Rock Labs, which builds products blending software, hardware, and human interaction.",
        link1: "https://www.linkedin.com/in/wangyijenny/",
        link2: "https://instagram.com/bobsmith",
      },
      {
        id: "intention-3",
        img: "/images/jonny-ouk.webp",
        name: "Jonny Sokhean Ouk",
        title: "Director, Cinematographer, XR Artist, XR Immersive Media Lab Manager",
        description:
          "A director and cinematographer, Jonny Ouk focuses on creating immersive experiences that enrich his storytelling. Using Unreal Engine for indie virtual production, photogrammetry for photo realistic characters and spaces, spatial video and motion capture, his development of novel workflows highlights the transformative use of emerging tools. Balancing technical acumen with creative vision, he’s committed to creating innovative media experiences that educate, inspire, and tell meaningful impactful human stories.",
        link1: "https://www.linkedin.com/in/sokheanjouk/",
        link2: "https://instagram.com/alicejohnson",
      },
      {
        id: "intention-4",
        img: "/images/steven-patterson.webp",
        name: "Steven Patterson, MS.",
        title: "Executive Director @ medVR Medical XR Accelerator",
        description:
          "Steven Max Patterson is the Executive Director of medVR, a non-profit providing catalytic education in medical XR. With a background in engineering, project management, and technology journalism, Steven has written for Ars Technica, Quartz, Fast Company, and IDG. He has built open source and mobile tech communities for over two decades and has worked to expand AR/VR into new fields since 2014. He founded and led the AR/VR hackathon at the MIT Media Lab in 2015.",
        link1: "https://www.linkedin.com/in/stevepatterson/",
        link2: "https://instagram.com/bobsmith",
      },
      {
        id: "intention-5",
        img: "/images/nabeel-gillani.webp",
        name: "Nabeel Gillani",
        title: "Assistant Professor of Design and Data Analysis",
        description:
          "Nabeel is an Assistant Professor of Design and Data Analysis jointly appointed with the D’Amore-McKim School of Business and the College of Arts, Media and Design at Northeastern University. His research interests involve using tools from computation and design to foster pluralism—an inclusive response to diversity in society—in ways that promote educational, economic, and social inclusion. More specifically, he seeks to apply methods from machine learning, data science, and design to build bridges across segregated spaces like: 1) echo chambers and empathy gaps on social media, and 2) educational inequalities stemming from segregated schools and neighborhoods.",
        link1: "https://www.linkedin.com/in/nabeel-gillani-05432822/",
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
    img: "/assets/investigation.webp",
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
    img: "/assets/impact.webp",
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
