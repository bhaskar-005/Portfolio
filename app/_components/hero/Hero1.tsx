import React from "react";
import Button1 from "../button/Button1";
import HighlitingDiv from "../HighlitingDiv";
import Button2 from "../button/Button2";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

const Hero1 = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:gap-10 gap-12 ">
  <HighlitingDiv text="Hey there, pleasure to meet you 👋" />
  <h1 className="text-center text-white sm:text-6xl text-2xl  sm:leading-[70px] leading-normal font-bold ">
    My name is{" "}
    <span className="font-semibold underline decoration-green-500 underline-offset-8 ">Bhaskar Bhandari</span>
     <br />I&apos;m a full stack developer
  </h1>
  <p className="text-center text-white sm:text-lg text-sm max-w-prose leading-noraml">
    I&apos;m a full stack developer.
    I&apos;ve explored various technologies and tools.
    always interested in learning new things.
  </p>
  <div className="flex flex-row gap-6">
    <Button1 text="Resume" fileUrl='/resume.pdf'  icon={<MdOutlineInsertPageBreak />} />
    <Button2 text="Contact" href={'#contect'} icon={<FaArrowDown />} />
  </div>
</div>

  );
};

export default Hero1;
