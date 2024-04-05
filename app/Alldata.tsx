import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import draw from '@/public/draw.png';
import airNote from '@/public/airNote.png';
import airScholar from '@/public/airScholar.png';


export const projects = [
    {
      id: 21,
      name: "Air Scholar",
      description: "EdTech platform to seamlessly create and sell courses.",
      photoSkillsUsed: [
        <FaReact key="react" />,
        <FaNodeJs key="node" />,
        <SiTailwindcss key="tailwind" />,
        <SiExpress key="express" />,
        <SiMongodb key="mongodb" />
      ],
      image: airScholar,
      Link: 'https://air-scholar.vercel.app/'
    },
    {
      id: 22,
      name: "Air Note",
      description: "A user-friendly React blog app.",
      photoSkillsUsed: [
        <FaReact key="react" />,
        <FaNodeJs key="node" />,
        <SiTailwindcss key="tailwind" />,
        <SiExpress key="express" />,
        <SiMongodb key="mongodb" />
      ],
      image: airNote,
      Link: 'https://airnote-blog.vercel.app'
    },
    {
      id: 24,
      name: "Draw",
      description: "Eraser like website to create diagrams",
      photoSkillsUsed: [
        <SiNextdotjs key="nextjs" />,
        <SiTailwindcss key="tailwind" />
      ],
      image: draw,
      Link: 'https://draw-web.vercel.app/'
    },
  ];
    