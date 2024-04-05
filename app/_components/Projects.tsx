import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import Button1 from './button/Button1';
import { text } from '../data';
import Link from 'next/link';
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import draw from '@/public/draw.png';
import airNote from '@/public/airNote.png';
import airScholar from '@/public/airScholar.png';


const Projects = () => {
const projects = [
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

  return (
    <div className='flex justify-center flex-col items-center gap-10 my-20 mb-40' >
    <div className='flex flex-wrap justify-evenly gap-3'>
      {
       projects.map((data)=>(
        <Link href={data.Link} target='_blank' key={data.id} >
        <div className='w-[240px] h-[150px] rounded-md flex justify-center items-center group relative glowing-border'>
           <div className='w-full h-full bg-black hidden bg-opacity-50 absolute group-hover:block'></div>
           <Image src={data.image} alt='project' width={400} height={400} className='h-full w-full object-cover' />
           <div className='absolute bottom-2 left-2 invisible group-hover:visible'>
             <div className='text-xl'>{data.name}</div>
             <div className='flex gap-2 flex-wrap'>
              {
                data.photoSkillsUsed.map((img,index)=>(
                  <div key={index}>{img}</div>
                ))  }
             </div>
           </div>
        </div>
        </Link>
       ))
      }
    </div>
      <Button1 text='Other projects' icon={<FaGithub />} href={`${text.gitHub}?tab=repositories`}/>
    
    </div>
  );
}

export default Projects;
