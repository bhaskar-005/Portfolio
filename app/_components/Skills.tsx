import React from "react";
import HighlitingDiv from "./HighlitingDiv";
import SkillCard from "./SkillCard";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3, IoLogoNodejs } from "react-icons/io";
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaLinux,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { DiNodejs, DiRedis } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { TbBrandVscode } from "react-icons/tb";
import { GrGraphQl } from "react-icons/gr";

const Skills = () => {
  const skills = {
    frontend: [
      { name: "HTML", logo: <FaHtml5 />,colour:'#e5532d' },
      { name: "CSS", logo: <IoLogoCss3 /> ,colour:'#306AF1'},
      { name: "JavaScript", logo: <FaJsSquare />,colour:'#F7E025' },
      { name: "React.js", logo: <FaReact />,colour:'#66DBFB' },
      { name: "next.js", logo: <SiNextdotjs />,colour:'#FCFCFC' },
      { name: "Tailwind", logo: <SiTailwindcss />,colour:'#3EBFF8' },
      { name: "ReactQuery", logo: <SiReactquery />,colour:'#ff4759'},
      { name: "Redux", logo: <SiRedux />,colour:'#7a50be'  },
    ],
    backend: [
      { name: "Node.js", logo: <IoLogoNodejs /> },
      { name: "TypeScript", logo: <BiLogoTypescript />},
      { name: "Express.js", logo: <SiExpress />},
      { name: "MongoDB", logo: <SiMongodb />},
      { name: "Postgresql", logo: <SiPostgresql />},
      { name: "Prisma", logo: <SiPrisma />  },
      { name: "Graphql", logo: <GrGraphQl /> },
      { name: "Redis", logo: <DiRedis />  },
    ],
    other: [
      { name: "Git", logo: <FaGitAlt /> },
      { name: "GitHub", logo: <FaGithub /> },
      { name: "Postman", logo: <SiPostman /> },
      { name: "VsCode", logo: <TbBrandVscode /> },
      { name: "Linux", logo: <FaLinux /> },
    ],
  };

  return (
    <div className="my-6 mb-40 flex flex-col justify-center items-center">
      <div className="my-10">
        <p className="text-lg font-[400] opacity-70">Frontend Skills </p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.frontend.map((data,index) => (
          <SkillCard key={index} logo={data.logo} name={data.name}  />
        ))}
      </div>
      <div className="my-10">
        <p className="text-lg font-[400] opacity-70">Backend Skills</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.backend.map((data,index) => (
          <SkillCard key={index} logo={data.logo} name={data.name}  />
        ))}
      </div>
      <div className="my-10">
        <p className="text-lg font-[400] opacity-70">Other tools</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.other.map((data,index) => (
          <SkillCard key={index} logo={data.logo} name={data.name}/>
        ))}
      </div>
    </div>
  );
};

export default Skills;
