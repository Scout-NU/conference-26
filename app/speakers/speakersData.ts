export interface Speaker {
  id: string;
  img: string;
  name: string;
  title: string;
  isDraft?: boolean;
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
        img: "/images/xinxin.webp",
        name: "XIN XIN",
        title: "Co-Executive Director, Processing Foundation Assistant Professor of Interaction and Media Design, The New School",
        description:
          "Xin Xin (they/them) is a Taiwanese-American cultural producer exploring community-driven technology in creative and educational spaces. As creator of TogetherNet and co-editor of the Critical Coding Cookbook, Xin advocates for liberatory software culture through the reclamation and subversion of power dynamics embedded within digital systems. Born in Taipei and raised in Massachusetts, Xin brings a multicultural perspective to questions of technology and sovereignty. An Eyebeam Rapid Response for a Better Digital Future Fellow and Sundance Art of Practice Fellow, their genre-bending practice weaves together art, education, organizing, and technological experimentation—interrogating who controls technology, who benefits from it, and the power of collectives in building a more equitable digital future.",
        link1: "https://www.linkedin.com/in/xinemata/",
        link2: "https://instagram.com/alicejohnson",
      },
      {
        id: "intention-2",
        img: "/images/paolo.jpg",
        name: "PAOLO CIUCCARELLI",
        title: "",
        description:
          "",
        link1: "https://www.linkedin.com/in/paolociuccarelli/",
        link2: "https://instagram.com/bobsmith",
      },
      {
        id: "intention-3",
        img: "/images/eileen.webp",
        name: "EILEEN MCGIVNEY",
        title: "Assistant Professor XR Education Design Lab Northeastern University College of Arts, Media and Design",
        description:
          "Dr. Eileen McGivney is an Assistant Professor at Northeastern University's College of Arts, Media, and Design. As Principal Investigator at the XR Education Design Lab, she conducts research on how VR and other immersive technologies can bring transformative learning experiences into the classroom. Using design-based research methods, her current work includes AI-powered simulations for health sciences students to practice patient communication skills, the design of VR field trips for high school STEM classrooms, and the study of problem-solving in VR escape rooms. Prior to Northeastern, Dr. McGivney earned her PhD at the Harvard Graduate School of Education and conducted research on education policy at the Brookings Institution.",
        link1: "https://www.linkedin.com/in/eileen-mcgivney-phd-73733963/",
        link2: "https://instagram.com/alicejohnson",
      },
      {
        id: "intention-4",
        img: "/images/steven.webp",
        name: "STEVEN GEOFREY",
        title: "Associate Teaching Professor and Creative Coding Program Coordinator, Senior Researcher / Design Lead, Partnering Lab",
        description:
          "Steven Geofrey (they/them) is an Associate Teaching Professor and Coordinator of Creative Coding in Art + Design. At Northeastern, they are Program Coordinator for the Information Design and Data Visualization (IDDV) graduate program and coordinate the Coding Clinic, a student-run support service for coding. As a research-practitioner in data, design, and computation, Steven’s practice uses Value-Sensitive Design as framework, code as material, and design as method to investigate representation, interpretation, and meaning. Steven is also Senior Researcher/Design Lead with Partnering Lab and was previously a Senior Research Scientist with Project Information Literacy. They maintain a freelance practice in digital humanities.",
        link1: "https://www.linkedin.com/in/stevengeofrey/",
        link2: "https://instagram.com/bobsmith",
      },
      {
        id: "intention-5",
        img: "/assets/speaker-placeholder.webp",
        name: "[Speaker Name]",
        title: "Title",
        isDraft: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/bobsmith",
        link2: "https://instagram.com/bobsmith",
      },
      {
        id: "intention-6",
        img: "/assets/speaker-placeholder.webp",
        name: "[Speaker Name]",
        title: "Title",
        isDraft: true,
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
        id: "intention-1",
        img: "/images/tiange-wang.webp",
        name: "Tiange Wang",
        title: "Design Lead, Software & Interaction, IDEO",
        description:
          "Tiange Wang is an award-winning and internationally-exhibiting designer and creative technologist. Her work investigates innovative interactive paradigms among humans, technology and the environment. Tackling subjects like intelligent systems, multisensory experiences, holistic wellbeing, and climate futures, she employs mediums including multimodal interaction, creative data visualization, multimedia art, software, food, physical AI, and games. As a Senior Design Lead at IDEO, she leads the design and prototyping of human-centered, planet-conscious, data-informed, and emerging-tech enabled products for Fortune 500 clients and high-growth ventures, taking ideas from 0 to 1 and transforming them into market-ready products across the digital and physical realms.",
        link1: "https://www.linkedin.com/in/tiange-wang/",
        link2: "https://instagram.com/alicejohnson",
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
        id: "investigation-3",
        img: "/images/hughguiney.jpeg",
        name: "HUGH GUINEY",
        title: "Lead Frontend Engineer, Klaviyo",
        description:
          "",
        link1: "https://www.linkedin.com/in/hughguiney/",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "investigation-4",
        img: "/assets/speaker-placeholder.webp",
        name: "[Speaker Name]",
        title: "Title",
        isDraft: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/danawhite",
        link2: "https://instagram.com/danawhite",
      },
      {
        id: "investigation-5",
        img: "/assets/speaker-placeholder.webp",
        name: "[Speaker Name]",
        title: "Title",
        isDraft: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/charlielee",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "investigation-6",
        img: "/assets/speaker-placeholder.webp",
        name: "[Speaker Name]",
        title: "Title",
        isDraft: true,
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
        id: "impact-3",
        img: "/images/catherineclark.jpeg",
        name: "CATHERINE CLARKE",
        title: "",
        description:
          "",
        link1: "https://www.linkedin.com/in/catherine-clarke-b38bb4196/",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "impact-4",
        img: "/assets/speaker-placeholder.webp",
        name: "[Speaker Name]",
        title: "Title",
        isDraft: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/danawhite",
        link2: "https://instagram.com/danawhite",
      },
      {
        id: "impact-5",
        img: "/assets/speaker-placeholder.webp",
        name: "[Speaker Name]",
        title: "Title",
        isDraft: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/charlielee",
        link2: "https://instagram.com/charlielee",
      },
      {
        id: "impact-6",
        img: "/assets/speaker-placeholder.webp",
        name: "[Speaker Name]",
        title: "Title",
        isDraft: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rhoncus metus ante, vitae dignissim elit ornare tristique. Nam sodales ultrices convallis. Quisque pellentesque commodo ante quis congue. Nam malesuada libero at purus efficitur fermentum. Morbi lacinia, turpis quis vehicula ornare, purus erat molestie sem, in cursus augue quam volutpat odio.",
        link1: "https://linkedin.com/in/danawhite",
        link2: "https://instagram.com/danawhite",
      },
    ],
  },
];

export function getPublishedSpeakerTracks(tracks: SpeakerTrack[]): SpeakerTrack[] {
  return tracks
    .map((track) => ({
      ...track,
      speakers: track.speakers.filter((speaker) => !speaker.isDraft),
    }))
    .filter((track) => track.speakers.length > 0);
}
