import React from 'react';
import JS from "@/public/JS.jpg"
import HighlitingDiv from './HighlitingDiv';
import Image from 'next/image';
import Button2 from './button/Button2';
import { FaGithub } from 'react-icons/fa';
import Button1 from './button/Button1';
import { text } from '../data';
import Link from 'next/link';

const projects = [
  {
    name: "Project 1",
    description: "Description of Project 1",
    photoSkillsUsed: ["Skill 1", "Skill 2", "Skill 3"],
    image: JS,
    Link:''
  },
  {
    name: "Project 2",
    description: "Description of Project 2",
    photoSkillsUsed: ["Skill 2", "Skill 4", "Skill 5"],
    image: JS,
    Link:''
  },
  {
    name: "Project 2",
    description: "Description of Project 2",
    photoSkillsUsed: ["Skill 2", "Skill 4", "Skill 5"],
    image: JS,
    Link:''
  },
  {
    name: "Project 2",
    description: "Description of Project 2",
    photoSkillsUsed: ["Skill 2", "Skill 4", "Skill 5"],
    image: JS,
    Link:''
  },
  
];

const Projects = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-10 my-20 mb-40' >
    <div className='flex flex-wrap justify-evenly gap-3'>
      {
       projects.map((data)=>(
        <Link href={data.Link} target='_blank'>
        <div key={data.name} className='w-[240px] h-[150px] rounded-md flex justify-center items-center group relative glowing-border'>
           <div className='w-full h-full bg-black hidden bg-opacity-50 absolute group-hover:block'></div>
           <Image src={data.image} alt='project' className='h-full w-full object-cover'/>
           <div className='absolute bottom-2 left-2 invisible group-hover:visible'>
             <div className='text-xl'>{data.name}</div>
             <div className='flex gap-2 flex-wrap'>
              {
                data.photoSkillsUsed.map((img)=>(
                  <div>{img}</div>
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
