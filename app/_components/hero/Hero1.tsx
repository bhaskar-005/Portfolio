import React from "react";
import Button1 from "../button/Button1";
import HighlitingDiv from "../HighlitingDiv";
import Button2 from "../button/Button2";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";

const Hero1 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-10 ">
  <HighlitingDiv text="Hey there, pleasure to meet you 👋" />
  <h1 className="text-center sm:text-6xl text-4xl  sm:leading-[70px] leading-normal font-bold ">
    My name is{" "}
    <span className="font-semibold underline decoration-green-500 underline-offset-8 ">Bhaskar Bhandari</span>
     <br />I'm a full stack developer
  </h1>
  <p className="text-center text-lg max-w-prose leading-noraml">
    I'm a full stack developer.
    I've explored various technologies and tools.
    always interested in learning new things.
  </p>
  <div className="flex flex-row gap-6">
    <Button1 text="Contact" icon={<MdOutlineInsertPageBreak />} />
    <Button2 text="Contact" icon={<FaArrowDown />} />
  </div>
</div>

  );
};

export default Hero1;
