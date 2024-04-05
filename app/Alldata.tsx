import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import draw from '@/public/draw.png';
import airNote from '@/public/airNote.png';
import airScholar from '@/public/airScholar.png';


export const projects = [
    {
      id:21,
      name: "Air Scholar",
      description: "EdTech platform to seamlessly create and sell courses.",
      photoSkillsUsed: [<FaReact />, <FaNodeJs />, <SiTailwindcss />,<SiExpress />,<SiMongodb />],
      image: airScholar,
      Link:'https://air-scholar.vercel.app/'
    },
    {
      id:22,
      name: "Air Note",
      description: "A user-friendly React blog app.",
      photoSkillsUsed: [<FaReact />, <FaNodeJs />, <SiTailwindcss />,<SiExpress />,<SiMongodb />],
      image: airNote,
      Link:'https://airnote-blog.vercel.app'
    },
    {
      id:24,
      name: "Draw",
      description: "Eraser like website to create diagrams",
      photoSkillsUsed: [<SiNextdotjs />,<SiTailwindcss />],
      image: draw,
      Link:'https://draw-web.vercel.app/'
    },
  ];